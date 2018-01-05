"""
@author:zzl
@time:2018/1/4 15:54
@desc:
"""
import xml.etree.cElementTree as ET
tree=ET.parse('city.xml')
root=tree.getroot()
ds=root.findall('d')
jsonStr=[]
for d in ds:
    
    d2=d.get('d2')
    jsonStr.append(d2)

with open('city.js','w',encoding='utf-8') as f:
    f.write(jsonStr)
print('success')


