from peewee import CharField
from peewee import TextField
from peewee import FloatField
from .BaseModel import BaseModel


class User(BaseModel):
    username = CharField(column_name='Username', max_length=100, null=False)
    email = TextField(column_name='UserEmail', null=False, unique=True)
    hashed_password = TextField(column_name='hashed_password', null=False)
    balance = FloatField(column_name='Balance', null=False, default=0)

    class Meta:
        table_name = 'User'

    def __str__(self):
        return f'{self.id} | {self.username} | {self.balance}'
