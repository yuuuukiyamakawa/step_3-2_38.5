from typing import List, Optional
from sqlalchemy import ForeignKey, String, Integer, Float
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column, relationship
# from datetime import datetime

class Base(DeclarativeBase):  # sqlalchemyのORM。DeclarativeBaseを継承し、Baseクラスの定義。
    pass


class User(Base):
    __tablename__ = 'user'
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    user_name: Mapped[str] = mapped_column()
    login_info_id: Mapped[int] = mapped_column(ForeignKey("login_info.id"))
    login_status_id: Mapped[int] = mapped_column(ForeignKey("login_status.id"))
    occupation_attributes_id: Mapped[int] = mapped_column(ForeignKey("occupation_attributes.id"))
    grid_id: Mapped[int] = mapped_column(ForeignKey("user_grid.id"))
    details_id: Mapped[int] = mapped_column(ForeignKey("details.id"))

    # login_info: Mapped['Login_info'] = relationship(back_populates='user')
    # login_status: Mapped['Login_status'] = relationship(back_populates='user')
    # occupation_attributes: Mapped['Occupation_attributes'] = relationship(back_populates='user')
    # user_grid: Mapped['User_grid'] = relationship(back_populates='user')


class Login_info(Base):
    __tablename__ = 'login_info'
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    login_id: Mapped[str] = mapped_column()
    login_pw: Mapped[str] = mapped_column()

    user: Mapped['User'] = relationship(backref='login_info')


class Login_status(Base):
    __tablename__ = 'login_status'
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    login_status: Mapped[str] = mapped_column()
    status_color: Mapped[str] = mapped_column()

    user: Mapped['User'] = relationship(backref='login_status')


class Occupation_attributes(Base):
    __tablename__ = 'occupation_attributes'
    id: Mapped[int] = mapped_column(primary_key=True)
    occupation_attributes_name: Mapped[str] = mapped_column()
    occupation_attributes_image_id: Mapped[int] = mapped_column(ForeignKey("occupation_attributes_image.id"))

    user: Mapped['User'] = relationship(backref='occupation_attributes')
    # occupation_attributes_image: Mapped['Occupation_attributes_image'] = relationship(back_populates='occupation_attributes')

class Occupation_attributes_image(Base):
    __tablename__ = 'occupation_attributes_image'
    id: Mapped[int] = mapped_column(primary_key=True)
    occupation_attributes_image: Mapped[str] = mapped_column()

    occupation_attributes: Mapped['Occupation_attributes'] = relationship(backref='occupation_attributes_image')


class User_grid(Base):
    __tablename__ = 'user_grid'
    id: Mapped[int] = mapped_column(primary_key=True)
    user_x_grid: Mapped[float] = mapped_column()
    user_y_grid: Mapped[float] = mapped_column()
    island_grid_id: Mapped[int] = mapped_column(ForeignKey("island_grid.id"))

    user: Mapped['User'] = relationship(backref='user_grid')
    # island_grid: Mapped['Island_grid'] = relationship(back_populates='user_grid')

class Island_grid(Base):
    __tablename__ = 'island_grid'
    id: Mapped[int] = mapped_column(primary_key=True)
    island_name: Mapped[str] = mapped_column()
    island_x_grid: Mapped[float] = mapped_column()
    island_y_grid: Mapped[float] = mapped_column()

    user_grid: Mapped['User_grid'] = relationship(backref='island_grid')


class Details(Base):
    __tablename__ = 'details'
    id: Mapped[int] = mapped_column(primary_key=True, autoincrement=True)
    sex_id: Mapped[int] = mapped_column(ForeignKey("sex.id"))
    age: Mapped[int] = mapped_column()
    living_place_id: Mapped[int] = mapped_column(ForeignKey("living_place.id"))
    birth_place_id: Mapped[int] = mapped_column(ForeignKey("birth_place.id"))
    industry: Mapped[str] = mapped_column()
    occupation: Mapped[str] = mapped_column()
    certification: Mapped[str] = mapped_column()
    skill: Mapped[str] = mapped_column()
    career: Mapped[str] = mapped_column()
    self_introduction: Mapped[str] = mapped_column(String(100))
    want: Mapped[str] = mapped_column(String(30))
    spend_time_id: Mapped[int] = mapped_column(ForeignKey("spend_time.id"))
    by_when_id: Mapped[int] = mapped_column(ForeignKey("by_when.id"))

    # sex: Mapped['Sex'] = relationship(back_populates='details')
    # living_place: Mapped['Place'] = relationship(back_populates='details')
    # birth_place: Mapped['Place'] = relationship(back_populates='details')
    # spend_time: Mapped['Spend_time'] = relationship(back_populates='details')
    # by_when: Mapped['By_when'] = relationship(back_populates='details')

class Sex(Base):
    __tablename__ = 'sex'
    id: Mapped[int] = mapped_column(primary_key=True)
    sex_name: Mapped[str] = mapped_column()

    details: Mapped['Details'] = relationship(backref='sex')

class Living_place(Base):
    __tablename__ = 'living_place'
    id: Mapped[int] = mapped_column(primary_key=True)
    living_place_name: Mapped[str] = mapped_column()

    details: Mapped['Details'] = relationship(backref='living_place')


class Birth_place(Base):
    __tablename__ = 'birth_place'
    id: Mapped[int] = mapped_column(primary_key=True)
    birth_place_name: Mapped[str] = mapped_column()

    details: Mapped['Details'] = relationship(backref='birth_place')


class Spend_time(Base):
    __tablename__ = 'spend_time'
    id: Mapped[int] = mapped_column(primary_key=True)
    spend_time: Mapped[str] = mapped_column()

    details: Mapped['Details'] = relationship(backref='spend_time')

class By_when(Base):
    __tablename__ = 'by_when'
    id: Mapped[int] = mapped_column(primary_key=True)
    by_when: Mapped[str] = mapped_column()

    details: Mapped['Details'] = relationship(backref='by_when')



# 以下、補足行

# Mapped[Optional[str]]は、データベースのカラムが文字列型で、値が設定されていない場合にNULLを許容することを意味しています。
# https://chat.openai.com/share/bdd731c5-5cf8-41d0-babf-24b1b5ae236f

# self_introduction: Mapped[str] = mapped_column(String(100))は、100文字以内のstring型