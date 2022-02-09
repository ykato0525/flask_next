from flask import Flask
from flask import render_template

app = Flask(__name__)

# 画像の表示を行う

# index用
@app.route('/app/hello/')
def index():
    data = {
        "title":"value1",
        "content":"value2",
        "writer":"value3"
        }
    return data



