from peewee import SqliteDatabase
from pathlib import Path
import os

current_dir = Path.cwd()
print(current_dir)

if not os.path.exists(str(current_dir) + '/.dt/database/database.sqlite'):
    os.mkdir(str(current_dir) + '/.dt')
    os.mkdir(str(current_dir) + '/.dt/database')

conn = SqliteDatabase(str(current_dir) + '/.dt/database/database.sqlite')
print(conn.database)