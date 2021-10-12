from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

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
    return 1

@app.get("/api/item/{id}")
async def get_todo_by_item(id):
    return 1

@app.post("/api/item")
async def post_items():
    return 1

@app.put("/api/item{id}")
async def put_item(id,data):
    return 1

@app.delete("api/item{id}")
async def delete_item(id):
    return 1
# %%
