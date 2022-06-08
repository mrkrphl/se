from flask import Flask, send_from_directory
from flask_cors import CORS, cross_origin
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow

app = Flask(__name__)
CORS(app)

app.config.from_object('config')

db = SQLAlchemy(app)
ma = Marshmallow(app)

from app.resource_module.resource_controller import article_info as info
app.register_blueprint(info)

db.create_all()

