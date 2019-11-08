import requests 
import mysql.connector
from mysql.connector import Error



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
        cursor.execute(f"SELECT * FROM schedule;")
        rows = cursor.fetchall()
        for row in rows:
            cursor.execute(f"SELECT DISTINCT scheduleID FROM seat WHERE scheduleID = {row[0]};")
            if(cursor.fetchone() == None):
                for i in range(30):
                    query = f'INSERT INTO `seat`(`scheduleID`, `seatNo`, `filled`) VALUES ({row[0]},{i+1},1)'
                    cursor.execute(query)
        connection.commit()    
except Error as e:
    print("Error while connecting to MySQL", e)
finally:
    if (connection.is_connected()):
        cursor.close()
        connection.close()
        print("MySQL connection is closed")