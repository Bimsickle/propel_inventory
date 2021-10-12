#%%
from pymongo import MongoClient
from model import Item
import motor.motor_asyncio

password = ""

with open('password.txt') as f:
    password = f.readlines()

cluster = "mongodb+srv://weihan:" + password[0] + "@cluster0.qjw65.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = MongoClient(cluster)

db = client.Database
item_collection = db.Item

async def fetch_one_item(code):
    document = await item_collection.find_one({"code":code})
    return document

async def fetch_all_items():
    items = []
    cursor = item_collection.find({})
    async for document in cursor:
        items.append(Item(**document))
    return items

async def create_item(item):
    document = item
    result = await item_collection.insert_one(document)
    return document

async def update_item(name, code, description=None, size=None, ingredients=None, allergy_info=None):
    await item_collection.update_one({'name':name,
                                    'code':code,
                                    'description':description,
                                    'size':size,
                                    'ingredients':ingredients,
                                    'allergy_info':allergy_info})

async def remove_item(code):
    await item_collection.delete_one({"code": code})
    return True
# %%
