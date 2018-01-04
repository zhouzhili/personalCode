#记录开机时间
import time
now=time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())+'\n'
with open('F:/time.txt','a') as f:
    f.write(now)
