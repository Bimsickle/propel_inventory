from typing import Optional
from datetime import datetime, date
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    code: Optional[str] = None
    description: Optional[str] = None
    size: Optional[str] = None
    ingredients: Optional[str] = None
    allergy_info: Optional[str] = None
class Inventory(BaseModel):
    item: Item
    quantity: int 
    exp_date: Optional[datetime] = None
    location: Optional[str] = None

class Todo(BaseModel):
    title: str
    description: str