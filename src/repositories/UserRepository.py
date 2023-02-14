from .BaseRepository import BaseRepository
from database.models.UserModel import User
from security.hashedpassword import hash_pwd
from database.models.ChetModel import Chet


class UserRepository(BaseRepository):

    def create_user(username: str, email: str, password: str) -> User:
        try:
            return User.create(username=username, email=email, hashed_password=hash_pwd(password))
        except Exception as e:
            print(str(e))
    
    def get_user_by_id(id: int) -> User or str:
        try:
            return User.get(id=id)
        except Exception as e:
            print(str(e))
            return str(e)
        
    def get_chets(user: User):
        return Chet.filter(user=user).execute()
