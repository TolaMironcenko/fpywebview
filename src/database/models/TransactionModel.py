from .BaseModel import BaseModel
from peewee import ForeignKeyField
from peewee import TextField
from peewee import FloatField
from peewee import DateTimeField
from .UserModel import User
from .ChetModel import Chet
from datetime import datetime


class Transaction(BaseModel):
    user = ForeignKeyField(User, backref='Transaction')
    chet = ForeignKeyField(Chet, backref='Transaction')
    category = TextField(column_name='Category', null=False, default='No category')
    sum = FloatField(column_name='Sum', null=False, default=0)
    date_time = DateTimeField(column_name='DateTimeTransaction', null=False, default=datetime.now())
