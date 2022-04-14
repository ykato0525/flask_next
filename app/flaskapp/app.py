from flask import Flask
from flask import render_template

app = Flask(__name__)

# 画像の表示を行う

# index用
@app.route('/blog/')
def index_of_blog():
    data = {
        "title":"value1",
        "content":"value2",
        "writer":"value3"
        }
    print("blogにアクセスしました")
    return data

@app.route("/note/")
def index_of_note():
    # 受け取るjsonの構造
    # タイトル
    # 日付
    # 担当者
    # ノートのファイル
    # 結果のファイル
    data = {
        "title":"〜の感受性試験",
        "date": "20220413",
        "name": "kato",
        "content":"note.pdf",
        "result":"result.html"
        }
    print("blogにアクセスしました")
    return data 

@app.route("/analysis/")
def index_of_aanlysis():
    data = {
        "title":"value1",
        "content":"value2",
        "writer":"value3"
        }
    print("blogにアクセスしました")
    return data 

