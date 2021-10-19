# %%
from pyzbar.pyzbar import decode
from io import BytesIO
from PIL import Image
import requests
from model import Inventory
import datetime

def read_image(file):
    img = Image.open(BytesIO(file))
    return img

def scan_barcode(img):
    for barcode in decode(img):
        code = barcode.data.decode('utf-8')

    url = 'https://world.openfoodfacts.org/api/v0/product/' + code + '.json'
    r = requests.get(url)
    return r.json()

def process_data(data):
    item = {
                "name": "",
                "code": "",
                "description": "",
                "size": "",
                "ingredients": [],
                "allergy_info": ""
    }
    quantity = 1
    exp_date = datetime.datetime.now()
    location = ""

    item['name'] = check_data(data,'product','product_name')
    item['code'] = data['code']
    item['description'] = ' '.join(check_data(data,'product','_keywords'))
    item['allergy_info'] = check_data(data,'product','allergens_from_ingredients')

    try:
        res = data['product']['ingredients']
    except KeyError:
        item['ingredients'] = []
    else:
        item['ingredients'] = res

    inventory = Inventory(item=item,quantity=quantity,exp_date = exp_date, location = location)
    
    return inventory

def check_data(json_data, cat1, cat2):
    try:
        res = json_data[cat1][cat2]
    except KeyError:
        return ""
    
    return res

# %%
