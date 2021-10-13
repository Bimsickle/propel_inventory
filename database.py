#%%
import motor.motor_asyncio
from model import Inventory

password = ""

with open('password.txt') as f:
    password = f.readlines()

cluster = "mongodb+srv://weihan:" + password[0] + "@cluster0.qjw65.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = motor.motor_asyncio.AsyncIOMotorClient(cluster)

db = client.Database
inventory_clt = db.Inventory

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
                "$sort": {"quantity":-1}
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

# %%
