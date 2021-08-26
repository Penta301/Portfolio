from pydantic import BaseModel

class Project(BaseModel):
    mainImg:str
    imgs:list
    title:str
    date:str
    description:str
    history:str
    technologies:list
    time:int
    link:str