#HTML解析
from bs4 import BeautifulSoup

with open('test.html','r',encoding='utf-8') as f:
    data=f.read()
    soup=BeautifulSoup(data,'lxml')
    links=soup.find_all('a',class_='topic_title')
    for a in links:
        print(a.string)

