"""
@author:zzl
@time:2017/11/30 17:29
@desc:知乎爬虫
"""
import requests
from mySpirderDemo import spirderUtil
from bs4 import BeautifulSoup
import time
from PIL import Image
import json

loginUrl = 'https://www.zhihu.com/login/email'
header = spirderUtil.header()

# 获取xsrf值
def getXsrf():
    r = requests.get(loginUrl, headers=header)
    soupe = BeautifulSoup(r.text, 'lxml')
    xsrf = soupe.select('input[name="_xsrf"]')
    if len(xsrf)>0:
        return xsrf[0]['value']
    else:
        return ''

#获取验证码
def getVerificationCode():
    """
    获取验证码本地显示
    """
    t=str(int(time.time())*1000)
    captcha_url = 'http://www.zhihu.com/captcha.gif?r=' + t + "&type=login&lang=cn"
    res=requests.get(captcha_url,headers=header)
    with open('captcha.gif','wb') as f:
        f.write(res.content)
    #验证码显示
    im=Image.open('captcha.gif')
    im.show()

#登录用的数据
data = {
    '_xsrf': getXsrf(),
    'password': 'zhili1990',
    'captcha_type': 'cn',
    'email': '1243976730@qq.com'
}
#登录有验证码，无法实现，从浏览器的cookies里直接登录
#获取知乎本月最热的5条
cookies=spirderUtil.getZhihuLoginCookies('search')
zhihuUrl='https://www.zhihu.com/explore#monthly-hot'

# 获取5条数据的接口
#写入
def writeToFile(r):
    with open('t.html','wb') as f:
        for chunk in r.iter_content(1):
            f.write(chunk)
        print('写入成功')

# 获取信息
def getInfo(bs4List):
    if bs4List and len(bs4List)>0:
        return bs4List[0].get_text()
    else:
        return ''
#获取标题，作者，赞成数
def getTitleAndAuthor(items):
    for item in items:
        title=getInfo(item.select('h2 > a'))
        author=getInfo(item.select('.author-link'))
        voteCount=getInfo(item.select('.zm-item-vote-count'))
        print('{}-{}-{}'.format(title,author,voteCount))

#获取HTML
def getExploreHtml(p):
    exploreUrl='https://www.zhihu.com/node/ExploreAnswerListV2'
    res=requests.get(exploreUrl,params=p,headers=header)
    soup=BeautifulSoup(res.text,'lxml')
    exploreItem=soup.select('.explore-feed')
    getTitleAndAuthor(exploreItem)

#获取100条
def getZhihuData(num):
    for i in range(0,num,5):
        print('-----------{}--------------'.format(i))
        dd={"offset":i,"type":"month"}
        params={'params':json.dumps(dd)}
        getExploreHtml(params)

if __name__=='__main__':
    getZhihuData(10)









