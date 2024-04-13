from sqlalchemy import ForeignKey, Float
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from datetime import datetime

class Base(DeclarativeBase):  # sqlalchemyのORM。DeclarativeBaseを継承し、Baseクラスの定義。
    pass

class Users(Base):
    __tablename__ = 'users'
    ID: Mapped[int] = mapped_column(primary_key=True)
    Name: Mapped[str] = mapped_column()
    Age: Mapped[int] = mapped_column()
    Career: Mapped[str] = mapped_column()
    Occupation: Mapped[str] = mapped_column()
    Occupation_image: Mapped[str] = mapped_column()
    Purpose: Mapped[str] = mapped_column()
    Good: Mapped[str] = mapped_column()
    Favorite: Mapped[str] = mapped_column()
    Skill: Mapped[str] = mapped_column()
    Certification: Mapped[str] = mapped_column()
    Login_ID: Mapped[str] = mapped_column()
    Login_PW: Mapped[str] = mapped_column()
    Login_latest: Mapped[str] = mapped_column()
    Login_icon_color: Mapped[str] = mapped_column()
    X_grid: Mapped[float] = mapped_column(type_=Float)
    Y_grid: Mapped[float] = mapped_column(type_=Float)