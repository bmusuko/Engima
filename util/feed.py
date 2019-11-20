import requests 
import mysql.connector
from mysql.connector import Error
import json
from faker import Faker
from random import randint
import datetime
import timestring



response = requests.get('https://api.themoviedb.org/3/movie/now_playing?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&page=1')

now_playing = response.json()
total_pages = now_playing['total_pages']

try:
    connection = mysql.connector.connect(host='127.0.0.1',
                                        database='engi_cinema',
                                        user='root',
                                        password='')

    for p in range(total_pages):
        response = requests.get(f'https://api.themoviedb.org/3/movie/now_playing?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&page={p+1}')

        now_playing = response.json()
        now_playing = now_playing['results']
        array_film = []
        for film in now_playing:
            array_film.append((film['id'],film['release_date'],film['vote_average']))

        # print(array_film)
        array_min = [0,5]

        week_ago = datetime.datetime.now() - datetime.timedelta(days=7)
        if connection.is_connected():
            db_Info = connection.get_server_info()
            print("Connected to MySQL Server version ", db_Info)
            cursor = connection.cursor()
            cursor.execute("select database();")
            # cursor.execute()
            record = cursor.fetchone()
            fake = Faker()
            for i in array_film:
                # print(i)
                # release_date = None
                release_date = datetime.datetime.strptime(i[1], '%Y-%m-%d')
                if(release_date >= week_ago and release_date <= datetime.datetime.now() and i[2]>0 ):
                    cursor.execute(f"SELECT DISTINCT movieID FROM `schedule` WHERE movieID = {i[0]};")
                    if (cursor.fetchone() == None):
                        print('bisa',i)
                        arr_temp = []
                        for j in range(5):
                            temp = fake.date_time_between(start_date=release_date+datetime.timedelta(days=(j)), end_date=f'+1d')
                            temp = datetime.datetime(temp.year, temp.month, temp.day, temp.hour, randint(0,5)*10+array_min[randint(0,1)], 0)
                            arr_temp.append(temp)
                        a = sorted(arr_temp)
                        for temp in a:
                            date = temp.strftime('%Y-%m-%d')
                            time = temp.strftime('%I.%M %p')
                            query = f'INSERT INTO `schedule`(`movieID`, `scheduleDate`, `scheduleTime`, `seat`) VALUES ({i[0]},\'{date}\',\'{time}\',30)'
                            # print(query)
                            cursor.execute(query)
                # else:
                #     print('tidak bisa',i)
            connection.commit()   

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")