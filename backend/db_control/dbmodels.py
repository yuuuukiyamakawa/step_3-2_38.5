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
    age: Mapped[int] = mapped_column()
    career: Mapped[str] = mapped_column()
    sex_id: Mapped[int] = mapped_column()  # FK
    address_id: Mapped[int] = mapped_column()  # FK
    occupation_id: Mapped[int] = mapped_column(ForeignKey("occupation.id"))
    grid_id: Mapped[int] = mapped_column(ForeignKey("user_grid.id"))
    login_info_id: Mapped[int] = mapped_column()  # FK
    details_id: Mapped[int] = mapped_column()  # FK

    # occupation: Mapped['Occupation'] = relationship(back_populates='user')
    # grid: Mapped['User_grid'] = relationship(back_populates='user')

class Occupation(Base):
    __tablename__ = 'occupation'
    id: Mapped[int] = mapped_column(primary_key=True)
    occupation_name: Mapped[str] = mapped_column()
    occupation_attributes_id: Mapped[str] = mapped_column()  # FK

    user: Mapped['User'] = relationship(backref='occupation')

class User_grid(Base):
    __tablename__ = 'user_grid'
    id: Mapped[int] = mapped_column(primary_key=True)
    user_x_grid: Mapped[float] = mapped_column()
    user_y_grid: Mapped[float] = mapped_column()
    island_grid_id: Mapped[int] = mapped_column(ForeignKey("island_grid.id"))

    user: Mapped['User'] = relationship(backref='grid')
    # island_grid: Mapped['Island_grid'] = relationship(back_populates='user_grid')

class Island_grid(Base):
    __tablename__ = 'island_grid'
    id: Mapped[int] = mapped_column(primary_key=True)
    island_name: Mapped[str] = mapped_column()
    island_x_grid: Mapped[float] = mapped_column()
    island_y_grid: Mapped[float] = mapped_column()

    user_grid: Mapped['User_grid'] = relationship(backref='island_grid')



# 以下、補足行


# --Mapped[Optional[str]]について詳しく説明します：
# Mapped: SQLAlchemyで、このフィールドがデータベーステーブルのカラムにマッピングされていることを示します。
# Mapped型は、カラムの値をPythonの属性として扱うことができるようにするものです。

# Optional[str]: この部分はPythonの型ヒントで、str型か、もしくはNoneが許容されることを意味します。
# Optional[str]は、基本的にUnion[str, None]と同じです。
# これは、該当するデータベースのカラムがNULL値を許容する場合に使用されます。

# このコンテキストでのMapped[Optional[str]]は、データベースのカラムが文字列型で、値が設定されていない場合にNULLを許容することを意味しています。
# つまり、このフィールドには文字列が入るか、もしくはNULL（PythonではNone）が入ることがあります。

# 例えば、nickname属性にMapped[Optional[str]]が使用されている場合、
# ユーザーにニックネームが設定されていないことを許容しており、
# その場合、データベースではその値がNULLとして保存されます。

# https://chat.openai.com/share/bdd731c5-5cf8-41d0-babf-24b1b5ae236f