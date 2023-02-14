import os
import hashlib

salt = b''


def hash_pwd(password: str) -> str:
    return str(hashlib.pbkdf2_hmac(
        'sha256',
        password.encode('utf-8'),
        salt,
        100000,
        dklen=128
    ))

