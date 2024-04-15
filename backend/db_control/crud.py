# import platform
# print("platform", platform.uname())

from sqlalchemy import create_engine, insert, delete, update, select
import sqlalchemy
from sqlalchemy.orm import sessionmaker
import json
import pandas as pd

from db_control.connect import engine
from db_control.dbmodels import User


def select_for_mapping(dbmodel):
    # session構築
    Session = sessionmaker(bind=engine)
    session = Session()

    query = select(* dbmodel)
    query = query.join(dbmodel[1])
    query = query.join(dbmodel[2])
    query = query.join(dbmodel[3])

    try:
    # トランザクションを開始
        with session.begin():
            df = pd.read_sql_query(query, con=engine)
            # con=engineパラメータは、クエリ実行のためのデータベース接続として使用されるエンジンを指定します。
            result_json = df.to_json(orient='records', force_ascii=False)
    except sqlalchemy.exc.IntegrityError:
        print("一意制約違反により、挿入に失敗しました")
        result_json = None

    # セッションを閉じる
    session.close()
    return result_json