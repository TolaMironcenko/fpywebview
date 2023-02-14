from .BaseRepository import BaseRepository
from database.models.UserModel import User
from database.models.ChetModel import Chet


class ChetRepository(BaseRepository):

    def create_chet(user: User, name: str) -> Chet:
        return Chet.create(user=user, name=name).execute()
