from typing import Optional
from datetime import datetime, date
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    code: str
    description: str
    size: str
    ingredients: str
    allergy_info: Optional[str] = None

class Location(BaseModel):
    name: str 

class Inventory(BaseModel):
    item: Item
    quantity: int 
    exp_date: date
    location: Location