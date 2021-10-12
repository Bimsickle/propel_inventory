from pymongo import MongoClient

password = ""

with open('password.txt') as f:
    password = f.readlines()

cluster = "mongodb+srv://weihan:" + password[0] + "@cluster0.qjw65.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
client = MongoClient(cluster)

db = client.Database