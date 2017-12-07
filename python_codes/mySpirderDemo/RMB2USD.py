"""
@author:zzl
@time:2017/12/5 11:02
@desc:抓取中国银行汇买价，from新浪财经
"""
import requests
import json

#返回中国银行汇买价
def getABCbugPrice():
    # 新浪财经数据接口
    url='http://vip.stock.finance.sina.com.cn/forex/api/openapi.php/ForexService.getBankForex'
    res=requests.get(url)
    result=json.loads(res.text)['result']
    if result['status']['code']==0:
        data=result['data']
        USD=data['bank']['USD']
        for item in USD:
            if item['bank']=='abchina':
                return item['xh_buy_price']

if __name__=='__main__':
    print(getABCbugPrice())



