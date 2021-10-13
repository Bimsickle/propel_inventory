# %%
import cv2
from pyzbar.pyzbar import decode

img = cv2.imread(r'D:\4. Programming\Projects\Propel\propel_inventory\data\test_1.png')
for barcode in decode(img):
    print(barcode.data)
    mydata = barcode.data.decode('utf-8')
    print(mydata)

print(img)
