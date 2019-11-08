import requests 
import mysql.connector
from mysql.connector import Error
import json
from faker import Faker
from random import randint
import datetime
response = requests.get('https://api.themoviedb.org/3/movie/now_playing?api_key=73d46027b91c9b97aad44eccdc904b85&language=en-US&page=1')

now_playing = response.json()
now_playing = now_playing['results']

array_film = []
for film in now_playing:
    array_film.append(film['id'])

print(array_film)
array_min = [0,5]


# for i in range(0,20):
#     temp = fake.date_time_between(start_date='now', end_date='+60d')
#     temp = datetime.datetime(temp.year, temp.month, temp.day, temp.hour, randint(0,5)*10+array_min[randint(0,1)], 0)
#     date = temp.strftime('%Y-%m-%d')
#     time = temp.strftime('%I.%M %p')
#     print(date,time)


try:
    connection = mysql.connector.connect(host='localhost',
                                         database='engi_cinema',
                                         user='root',
                                         password='')

    if connection.is_connected():
        db_Info = connection.get_server_info()
        print("Connected to MySQL Server version ", db_Info)
        cursor = connection.cursor()
        cursor.execute("select database();")
        # cursor.execute()
        record = cursor.fetchone()
        fake = Faker()
        for i in array_film:
            cursor.execute(f"SELECT DISTINCT movieID FROM `schedule` WHERE movieID = {i};")
            if (cursor.fetchone() == None):
                arr_temp = []
                for j in range(0,20):
                    temp = fake.date_time_between(start_date='now', end_date='+60d')
                    temp = datetime.datetime(temp.year, temp.month, temp.day, temp.hour, randint(0,5)*10+array_min[randint(0,1)], 0)
                    arr_temp.append(temp)
                a = sorted(arr_temp)
                for temp in a:
                    date = temp.strftime('%Y-%m-%d')
                    time = temp.strftime('%I.%M %p')
                    query = f'INSERT INTO `schedule`(`movieID`, `scheduleDate`, `scheduleTime`, `seat`) VALUES ({i},\'{date}\',\'{time}\',30)'
                    # print(query)
                    cursor.execute(query)
        connection.commit()   

except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")