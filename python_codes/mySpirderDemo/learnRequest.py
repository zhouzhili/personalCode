"""
@author:zzl
@time:2017/11/30 10:37
@desc: request库的学习,爬开源中国
"""
import spirderUtil
import requests
from bs4 import BeautifulSoup

header = spirderUtil.header()

mainUrl = 'http://www.oschina.net'
r = requests.get(mainUrl,headers=header)

soupe=BeautifulSoup(r.text,'lxml')

# 使用函数过滤，class只有page没有hide的div
def pageNotHide(tag):
    if tag.has_attr('class'):
        classArr=tag['class']
        return 'page' in classArr and 'hide' not in classArr
    else:
        return False

#获取第二个page中的新闻链接
newsLinks=soupe.find_all(pageNotHide)[1].find_all('a',class_=['news-link','is-today'])

#将单个链接里的内容写入文件
def writeTextToFile(news):
    href=news['href']
    title=news['title']
    r2=requests.get(mainUrl+href,headers=header)
    s2=BeautifulSoup(r2.text,'lxml')
    text=s2.find('div',class_='text').get_text()
    with open('news/'+title,'w',encoding='utf-8') as f:
        f.write(text)
        print('{} 写入成功'.format(title))

writeTextToFile(newsLinks[0])










