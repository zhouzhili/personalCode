"""
@author:zzl
@time:2018/1/4 15:54
@desc:
"""
import xml.etree.cElementTree as ET
tree=ET.parse('city.xml')
root=tree.getroot()
ds=root.findall('d')
jsonStr='{'
for d in ds:
    d1=d.get('d1')
    d2=d.get('d2')
    data='"{0}":"{1}",'.format(d2,d1)
    jsonStr+=data
jsonStr+='}'

with open('city.js','w',encoding='utf-8') as f:
    f.write(jsonStr)
print('success')


