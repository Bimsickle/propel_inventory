#%%
import cv2
from pyzbar.pyzbar import decode
import time

cap = cv2.VideoCapture(0)
cap.set(3,640)
cap.set(4,480)
used_codes = []

camera = True
while camera == True:
    success,frame = cap.read()
    for code in decode(frame):
        if code.data.decode('utf-8') not in used_codes:
            print("Approved")
            used_codes.append(code.data.decode('utf-8'))
            time.sleep(5)
        elif code.data.decode('utf-8') in used_codes:
            print("Used")
            time.sleep(5)
        else:
            pass

# %%
