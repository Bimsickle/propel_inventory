from typing import Optional,List
from datetime import datetime, date
from pydantic import BaseModel,validator

class Item(BaseModel):
    name: Optional[str] = None
    code: Optional[str] = None
    description: Optional[str] = None
    size: Optional[str] = None
    ingredients: Optional[List] = None
    allergy_info: Optional[str] = None
class Inventory(BaseModel):
    item: Optional[Item] = None
    quantity: Optional[int] = None
    exp_date: Optional[date] = None
    location: Optional[str] = None

    @validator('exp_date',pre=True)
    def parse_date(cls,value):
        return datetime.strptime(value, "%m-%d-%Y").date()

class ShoppingList(BaseModel):
    date: Optional[date] = None
    item: Optional[Item] = None
    quantity: Optional[int] = None
    bought: Optional[bool] = False