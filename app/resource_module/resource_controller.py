from flask import jsonify
from app import app
from app.resource_module.resource_model import Resource, ResourceSchema
from flask import Blueprint
resource_schema = ResourceSchema()
resources_schema = ResourceSchema(many=True)

article_info = Blueprint('info', __name__, url_prefix='/info')

@article_info.route('/get', methods = ['GET'])
def getArticles():
    all_resources = Resource.query.all()
    results = resources_schema.dump(all_resources)
    return jsonify(results)

@article_info.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    resource = Resource.query.get(id)
    return resource_schema.jsonify(resource)
