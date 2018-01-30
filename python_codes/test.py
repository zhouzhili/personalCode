"""
@author:zzl
@time:2017/12/1 11:03
@desc:
"""
from PIL import Image
import pytesseract
text=pytesseract.image_to_string(Image.open('aa.png'),lang='chi_sim')
print(text)

