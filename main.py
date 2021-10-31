from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from model import Inventory,ShoppingList
from barcode_scanning import process_data,retrieve_json

app = FastAPI()

from database import (
    delete_all_items,
    delete_item_shopping,
    fetch_all_items,
    create_item,
    fetch_all_items_sum,
    fetch_all_items_location,
    delete_all_items,
    create_item_shopping,
    fetch_all_items_shopping,
    delete_item_inventory,
    delete_item_shopping,
    update_item_shopping,
    fetch_all_items_expired,
    fetch_all_items_date
)

origins = ['*']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials = True,
    allow_methods =["*"],
    allow_headers=["*"]
)

@app.get("/")
def home():
    return {"Data":"Test"}

@app.get("/api/item")
async def get_items_from_inventory():
    response = await fetch_all_items()
    return response

@app.get("/api/item/sum")
async def get_items_sum_from_inventory():
    response = await fetch_all_items_sum()
    return response

@app.get("/api/item/location")
async def get_items_location_from_inventory():
    response = await fetch_all_items_location()
    return response

@app.get("/api/item/expired")
async def get_expired_soon_items():
    response = await fetch_all_items_expired()
    return response

@app.get("/api/item/date")
async def get_items_date_from_inventory():
    response = await fetch_all_items_date()
    return response

@app.post("/api/create-item/", response_model=Inventory)
async def create_item_inventory(inventory: Inventory):
    response = await create_item(inventory.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

# @app.post('/api/read-barcode', response_model = Inventory)
# async def create_item_from_barcode_inventory(file: UploadFile = File(...)):
#     extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
#     if not extension:
#         return "Image must be jpg or png format!"
#     img = read_image(await file.read())
#     json_data = scan_barcode(img)
#     item_data = process_data(json_data)
#     response = await create_item(item_data.dict())
#     if response:
#         return response
#     raise HTTPException(400, "Something went wrong")

@app.delete("/api/delete-all-inventory")
async def delete_all_items_inventory():
    response = await delete_all_items()
    if response:
        return "Successfully deleted all items in Inventory"
    raise HTTPException(404,f"Something went wrong.")

@app.get("/api/shopping/item")
async def get_items_from_shopping_list():
    response = await fetch_all_items_shopping()
    return response

@app.post("/api/shopping/create-item", response_model=ShoppingList)
async def create_item_inventory(shoppinglist: ShoppingList):
    response = await create_item_shopping(shoppinglist.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.post('/api/create-item-barcode', response_model = Inventory)
async def create_item_from_barcode_inventory(inventory: Inventory):
    barcode = inventory.dict()['item']['code']
    json_data = retrieve_json(barcode)
    item_data = process_data(json_data)
    response = await create_item(item_data.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.delete("/api/item/{id}")
async def delete_item_from_inventory(id):
    response = await delete_item_inventory(id)
    if response:
        return "Successfully deleted item"
    raise HTTPException(404,f"There is no item with the id {id}")

@app.delete("/api/shopping/item/{id}")
async def delete_item_from_shopping_list(id):
    response = await delete_item_shopping(id)
    if response:
        return "Successfully deleted item"
    raise HTTPException(404,f"There is no item with the id {id}")

@app.put("/api/shopping/item/{id}")
async def update_item_from_shopping_list(id:str,bought:bool):
    response = await update_item_shopping(id,bought)
    if response:
        return response
    raise HTTPException(404,f"There is no todo with the id {id}")
