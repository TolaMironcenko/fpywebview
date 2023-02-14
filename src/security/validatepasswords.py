from .hashedpassword import hash_pwd


def validate_passwords(hashed_password: str, password2: str) -> bool:
    return hashed_password == hash_pwd(password=password2)
