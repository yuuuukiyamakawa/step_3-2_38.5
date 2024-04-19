# import platform
# print(platform.uname())  # システムの概要（OS名、ノード名、リリース、バージョン、マシンタイプ、プロセッサタイプなど）をコンソールに出力

from sqlalchemy import create_engine

import os
main_path = os.path.dirname(os.path.abspath(__file__))  # カレントディレクトリの取得
path = os.chdir(main_path)  # カレントディレクトリに移動

engine = create_engine('sqlite:///user_master.db', echo=True)  # sqliteのdbに接続。echo=Trueでdbのコンソール出力