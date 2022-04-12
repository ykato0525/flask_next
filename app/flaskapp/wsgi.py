from tokenize import Triple
from app import app

if __name__ == '__main__':
    # debug要らなくなったら、debug=Trueを消してください
    # portの指定を追加(0207)
    app.run(host='0.0.0.0', port=5000, debug=True)