from fastapi import FastAPI, HTTPException, File, UploadFile
from fastapi.middleware.cors import CORSMiddleware
from model import Inventory
from barcode_scanning import read_image, scan_barcode,process_data
import json

app = FastAPI()

from database import (
    delete_all_items,
    fetch_all_items,
    create_item,
    fetch_all_items_sum,
    fetch_all_items_location,
    delete_all_items
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
async def get_items():
    response = await fetch_all_items()
    return response

@app.get("/api/item/sum")
async def get_items_sum():
    response = await fetch_all_items_sum()
    return response

@app.get("/api/item/location")
async def get_items_location():
    response = await fetch_all_items_location()
    return response

@app.post("/api/item/", response_model=Inventory)
async def post_item(inventory: Inventory):
    response = await create_item(inventory.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.post('/api/read-barcode', response_model = Inventory)
async def create_item_from_barcode(file: UploadFile = File(...)):
    extension = file.filename.split(".")[-1] in ("jpg", "jpeg", "png")
    if not extension:
        return "Image must be jpg or png format!"
    img = read_image(await file.read())
    json_data = scan_barcode(img)
    item_data = process_data(json_data)
    response = await create_item(item_data.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.delete("/api/delete-all")
async def delete_all():
    response = await delete_all_items()
    if response:
        return "Successfully deleted all items in Inventory"
    raise HTTPException(404,f"Something went wrong.")

