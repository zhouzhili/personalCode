"""
@author:zzl
@time:2018/1/29 12:31
@desc:图片文字的识别
"""
from PIL import Image
import pytesseract

text = pytesseract.image_to_string(Image.open('img/num.tif'), lang='chi_sim')
print(text)
