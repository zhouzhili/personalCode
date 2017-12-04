#爬京东
import requests
import random
import requests_cache

headers = {
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/47.0.2526.80 Safari/537.36',
    'Referer':'https://trade.jd.com/shopping/order/getOrderInfo.action?rid=1511943241226%27'
}

for i in range(1,10):
    random_str=str(random.random())
    url='https://captcha.jd.com/verify/image?acid={}_{}'.format(random_str,random_str)

    with open('img/'+random_str+'.jpg','wb') as f:
        with requests_cache.disabled():
            f.write(requests.get(url,headers=headers).content)
    print(i,url)





