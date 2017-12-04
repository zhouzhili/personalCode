"""
@author:zzl
@time:2017/12/4 10:39
@desc:数据库链接测试01
"""
import psycopg2

con=psycopg2.connect('dbname=postgres user=postgres password=123 host=127.0.0.1 port=5432')
print('success')
cur=con.cursor()
cur.execute('INSERT INTO TEST(name,age)VALUES (%s,%s)',('python',20))
con.commit()
cur.execute('SELECT * FROM TEST;')
rows=cur.fetchall()
print(rows)
cur.close()
con.close()
