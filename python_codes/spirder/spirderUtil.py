"""
@author:zzl
@time:2017/11/30 17:11
@desc:爬虫的工具包
"""
#返回模拟的请求头
def header():
    """
    获取模拟请求头
    :return: 返回headers
    """
    return {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/62.0.3202.75 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
        'Accept-Encoding': 'gzip, deflate',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7'
    }

#模拟知乎的cookies
def getZhihuLoginCookies(tag):
    """
    返回知乎cookies
    :return:
    """
    cStr=''
    if tag=='login':
        cStr='q_c1=878440c2dc7745b6b7df45289bd5bc28|1510107836000|1510107836000; _zap=366fdcf1-b95e-4d9a-8c18-5dce5eb3f704; d_c0="AGDCWvXLpwyPTpT9pW1Gs9YLmsuHpZ_cLgk=|1510199076"; aliyungf_tc=AQAAABG7hzsR4gcAtkW3PW2lRnNQGL5j; _xsrf=a0b4d4a54a461795dc2ca49887692ad0; _xsrf=a0b4d4a54a461795dc2ca49887692ad0; r_cap_id="NzA3M2I1MGVlNTExNGI4MWEzZWJiNTliYzA5Y2ExMjE=|1512097307|3787c6140afebddb6b87f3bb794952439eb07f8d"; cap_id="MGRhYjM1ZGFkM2FlNGRlZWI0NmMxNWYxNzMyM2E4MWY=|1512097307|b8fc0d7df85f992f8c4dcefb267579b942121dac"; __utma=51854390.76929801.1512033831.1512092968.1512094919.3; __utmb=51854390.0.10.1512094919; __utmc=51854390; __utmz=51854390.1512094919.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmv=51854390.000--|2=registration_date=20131017=1^3=entry_date=20171108=1; z_c0=Mi4xQTEwY0FBQUFBQUFBWU1KYTljdW5EQmNBQUFCaEFsVk5KeFFPV3dDd0p2RXBsTWt3SDVOZ1NFaGV4NGFPdGxVaFdB|1512097319|db0793ebebcafdcb73dd5ba851fe10af5eb360ce'
    elif tag=='search':
        cStr='q_c1=878440c2dc7745b6b7df45289bd5bc28|1510107836000|1510107836000; _zap=366fdcf1-b95e-4d9a-8c18-5dce5eb3f704; d_c0="AGDCWvXLpwyPTpT9pW1Gs9YLmsuHpZ_cLgk=|1510199076"; aliyungf_tc=AQAAABG7hzsR4gcAtkW3PW2lRnNQGL5j; _xsrf=a0b4d4a54a461795dc2ca49887692ad0; r_cap_id="NzA3M2I1MGVlNTExNGI4MWEzZWJiNTliYzA5Y2ExMjE=|1512097307|3787c6140afebddb6b87f3bb794952439eb07f8d"; cap_id="MGRhYjM1ZGFkM2FlNGRlZWI0NmMxNWYxNzMyM2E4MWY=|1512097307|b8fc0d7df85f992f8c4dcefb267579b942121dac"; z_c0=Mi4xQTEwY0FBQUFBQUFBWU1KYTljdW5EQmNBQUFCaEFsVk5KeFFPV3dDd0p2RXBsTWt3SDVOZ1NFaGV4NGFPdGxVaFdB|1512097319|db0793ebebcafdcb73dd5ba851fe10af5eb360ce; _xsrf=a0b4d4a54a461795dc2ca49887692ad0; __utma=51854390.76929801.1512033831.1512092968.1512094919.3; __utmb=51854390.0.10.1512094919; __utmc=51854390; __utmz=51854390.1512094919.3.3.utmcsr=baidu|utmccn=(organic)|utmcmd=organic; __utmv=51854390.100-1|2=registration_date=20131017=1^3=entry_date=20131017=1'
    b=cStr.split(';')
    cookies={}
    for s in b:
        ss=s.split('=')
        cookies[ss[0]]=ss[1]
    return cookies
