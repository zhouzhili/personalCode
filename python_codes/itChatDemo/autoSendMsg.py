"""
@author:zzl
@time:2017/12/6 11:05
@desc:itchat微信自动发消息测试
"""
import itchat

itchat.send('hello',toUserName='')

itchat.auto_login()
itchat.run()