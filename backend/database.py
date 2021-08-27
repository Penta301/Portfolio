import motor.motor_asyncio 
import random
import os

uri_srv = os.getenv("MONGODB_URI_SRV")

client = motor.motor_asyncio.AsyncIOMotorClient(uri_srv)

database = client.Portfolio
collection_projects = database.projects

async def fetch_all(collection, model, specific =False, where=False):
    if not specific:
        cursor = collection.find({})

    else:
        cursor = collection.find({where:specific})
    
    operations=[]
    async for document in cursor:
        operations.append(model(**document))
    return operations

async def create_operation(model, collection, where = '', specific = '',  verify = False):
    document = model

# Check if the data exists 

    try:    
        if verify:
            repeat = await collection.find_one({where:document[specific]})
            if repeat:
                random_number = random.randint(0, 22)
                document[where] = document[where] + f'_{random_number}'

    except AssertionError as error:
        print(error)

    await collection.insert_one(document)
    return document

async def update_operation(collection, where, name, model,specific_where ,one = False):
    document = model

    if one:
        result = await collection.update_one({where:name}, {"$set":{specific_where:model}})
        return result.matched_count
    
    result = await collection.update_one({where:name},
    {"$set":document}) 
    return result.matched_count

async def remove_operation(collection, name):
   result = await collection.delete_one({"name":name})
   return result.deleted_count