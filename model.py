from typing import Optional,List
from datetime import datetime, date
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    code: Optional[str] = None
    description: Optional[str] = None
    size: Optional[str] = None
    ingredients: Optional[List] = None
    allergy_info: Optional[str] = None
class Inventory(BaseModel):
    item: Item
    quantity: int 
    exp_date: Optional[datetime] = None
    location: Optional[str] = None

class ShoppingList(BaseModel):
    date: Optional[datetime] = None
    item: Item
    quantity: int
    bought: Optional[bool] = False