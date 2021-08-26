import sys
sys.path.append('..')
from fastapi import HTTPException, APIRouter 
from backend.model import Project
from backend.database import (
    collection_projects,
    remove_operation,
    create_operation,
    fetch_all
)

router = APIRouter(
    prefix="/api",
    tags=['Projects']
)

@router.post("/create_project/", response_model = Project)
async def create_project(project: Project):
    project = project.dict()
    response = await create_operation(project, collection_projects, where='title', specific='title' ,verify=True)    
    if response:
        if response == 'error_name':
            raise HTTPException(409, 'That item exists')
        return response
    raise HTTPException(400, 'Something wet wrong')

@router.get('/get_all_projects/' )
async def get_all_projects():
    response = await fetch_all(collection_projects, Project)
    if response:
        return response
    raise HTTPException(404, 'Not Found Course With That Features')

@router.delete('/delete_project/{name}/')
async def delete_project(name:str):
    response = await remove_operation(collection_projects, name)
    if response:
        return 'Delete operation was successfully'
    raise HTTPException(404, 'Not Found Course With That Name')