from database.base import conn
from peewee import Model


# базовая модель от которой наследуются остальные
class BaseModel(Model):
    class Meta:
        database = conn