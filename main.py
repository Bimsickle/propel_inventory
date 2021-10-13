from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Todo, Inventory

app = FastAPI()

from database import (
    fetch_all_items,
    create_item,
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

@app.get("/api/todo")
async def get_items():
    response = await fetch_all_items()
    return response

@app.post("/api/item/", response_model=Inventory)
async def post_item(inventory: Inventory):
    response = await create_item(inventory.dict())
    if response:
        return response
    raise HTTPException(400, "Something went wrong")
