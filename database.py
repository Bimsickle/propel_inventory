#%%
import motor.motor_asyncio
from model import Inventory, ShoppingList
import os
from dotenv import load_dotenv
from bson.objectid import ObjectId
import datetime as dt

load_dotenv('password.env')

password = os.getenv('password')

cluster = "mongodb+srv://weihan:" + password + "@cluster0.qjw65.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = motor.motor_asyncio.AsyncIOMotorClient(cluster)

db = client.Database
inventory_clt = db.Inventory
shopping_clt = db.Shopping

# Add new item into the inventory
async def create_item(item):
    document = item
    result = await inventory_clt.insert_one(item)
    return document

# Get all items from the inventory
async def fetch_all_items():
    items = []
    cursor = inventory_clt.find({})
    async for document in cursor:
        items.append(Inventory(**document))
    return items

# Retrieve all items with their added quantities, sorted descendingly
async def fetch_all_items_sum():
    items = []
    cursor = inventory_clt.aggregate(
        [
            {
                '$group':
                    {
                        "_id": "$item.name",
                        "quantity":{"$sum":"$quantity"}
                    }
            },
            {
                "$sort": {"quantity":1}
            }
        ]
    )
    async for document in cursor:
        items.append(document)
    return items

# Retrieve all items with their added quantities, sorted by Location ascendingly.
async def fetch_all_items_location():
    items = []
    cursor = inventory_clt.aggregate([
    {
        "$group":{"_id":{"location":"$location","name":"$item.name"},
        "quantity":{"$sum":"$quantity"}}
    }
    ]
    )
    async for document in cursor:
        items.append(document)
    return items

# Retrieve items and sort based on expiration date
async def fetch_all_items_date():
    items = []
    cursor = inventory_clt.aggregate(
        [
            {
                "$sort": {"exp_date":-1}
            }
        ]
    )
    async for document in cursor:
        items.append(Inventory(**document))
    return items

# Get items which are going to be expired soon (7 days)
async def fetch_all_items_expired():
    current = dt.datetime.now()
    after_7_days = current + dt.timedelta(days=7)
    items = []
    cursor = inventory_clt.find({'exp_date':{'$gte':current,'$lte':after_7_days}})
    async for document in cursor:
        items.append(Inventory(**document))
    return items

# Delete all items in collection
async def delete_all_items():
    inventory_clt.delete_many({})
    return True

# Add new item into the shopping list
async def create_item_shopping(item):
    document = item
    result = await shopping_clt.insert_one(item)
    return document

# Get all items from the shopping list
async def fetch_all_items_shopping():
    items = []
    cursor = shopping_clt.find({})
    async for document in cursor:
        items.append(ShoppingList(**document))
    return items

# Delete item from inventory
async def delete_item_inventory(id):
    await inventory_clt.delete_one({'_id': ObjectId(id)})
    return True

# Delete item from shopping list
async def delete_item_shopping(id):
    await shopping_clt.delete_one({'_id': ObjectId(id)})
    return True

# Update item for shopping list
async def update_item_shopping(id,bought):
    await shopping_clt.update_one({'_id':ObjectId(id)},{'$set':{'bought': bought}})
    document = await shopping_clt.find_one({"_id":id})
    return document
# %%
