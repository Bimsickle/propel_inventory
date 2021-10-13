from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Inventory

app = FastAPI()

from database import (
    fetch_all_items,
    create_item,
    fetch_all_items_sum,
    fetch_all_items_location
)

origins = ['https://localhost:3000']

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
