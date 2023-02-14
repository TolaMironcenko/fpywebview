import webview
from repositories.ChetRepository import ChetRepository
from repositories.UserRepository import UserRepository
from database.base import conn 
from database.models.UserModel import User
from database.models.ChetModel import Chet
from database.models.TransactionModel import Transaction

DEV = {'template': 'http://127.0.0.1:3000', 'debug': True}
PROD = {'template': 'templates/build/index.html', 'debug': False}

conn.create_tables([User, Chet, Transaction])
UserRepository.create_user(username='Tola', email='tolamironcenko@gmail.com', password='2808')
ChetRepository.create_chet(user=UserRepository.get_user_by_id(id=1), name='Main')


def get_all_chets(userid: int):
    chetlist = ChetRepository.get_all_chets(user=UserRepository.get_user_by_id(id=userid))
    chetresponse = [
        {
            'id': i.id, 
            'name': i.name, 
            'balance': i.balance
        } for i in chetlist
    ]
    return chetresponse


def create_chet(userid: int, name: str):
    newchet = ChetRepository.create_chet(user=UserRepository.get_user_by_id(id=userid), name=name)
    newchetjson = {
        'id': newchet.id,
        'name': newchet.name,
        'balance': newchet.balance
    }
    return newchetjson

if __name__ == '__main__':
    window_args = {
        'title': 'DUTY',
        'url': PROD['template'],
        'width': 350,
        'height': 350,
        'min_size': (350, 350)
    }
    window = webview.create_window(**window_args)
    window.expose(get_all_chets, create_chet)

    webview.start(window, debug=DEV['debug'])
