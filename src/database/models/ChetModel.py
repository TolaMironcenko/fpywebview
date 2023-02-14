from .BaseModel import BaseModel
from peewee import ForeignKeyField
from peewee import TextField
from peewee import FloatField
from .UserModel import User


class Chet(BaseModel):
    # id = AutoField(column_name='ChetId')
    user = ForeignKeyField(User, backref='Chet')
    name = TextField(column_name='ChetName', null=False)
    balance = FloatField(column_name='ChetBalance', null=False, default=0)

    def __str__(self):
        return f'{self.id} | {self.name} | {self.balance}'