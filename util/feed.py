import requests 
import mysql.connector
from mysql.connector import Error
import json
from faker import Faker
from random import randint
import datetime
import timestring

now = datetime.datetime.now()
now = f'{now.year}-{now.month}-{now.day}'
week_ago = datetime.datetime.now() - datetime.timedelta(days=7)
week_ago = f'{week_ago.year}-{week_ago.month}-{week_ago.day}'
print(week_ago)

response = requests.get(f'https://api.themoviedb.org/3/discover/movie?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte={week_ago}&primary_release_date.lte={now}&vote_count.gte=3')
now_playing = response.json()
now_playing = now_playing['results']

print(now_playing)
try:
    connection = mysql.connector.connect(host='127.0.0.1',
                                        database='engi_cinema',
                                        user='root',
                                        password='')

#         now_playing = response.json()
#         now_playing = now_playing['results']
    array_film = []
    for film in now_playing:
        array_film.append((film['id'],film['release_date'],film['vote_average']))

    print(array_film)
    array_min = [0,5]

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