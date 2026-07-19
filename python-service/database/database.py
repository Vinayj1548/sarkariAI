import certifi
from pymongo import MongoClient

from utils.config import MONGODB_URI, DATABASE_NAME


client = MongoClient(
    MONGODB_URI,
    tlsCAFile=certifi.where()
    )

db = client[DATABASE_NAME]

notifications = db.notifications