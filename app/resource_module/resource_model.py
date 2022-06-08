from app import db, ma
import datetime

CoAuthor = db.Table('coAuthor', 
    db.Column('author_id', db.Integer, db.ForeignKey('author.id')),
    db.Column('resource_id', db.Integer, db.ForeignKey('resource.id'))
)

class Resource(db.Model):
    __tablename__= "resource"
    id = db.Column(db.Integer, primary_key = True)
    publication_id = db.Column(db.Integer, db.ForeignKey('publication.id'))
    title = db.Column(db.String(100))
    abstract = db.Column(db.Text())
    url = db.Column(db.String(100))
    date_added = db.Column(db.DateTime, default = datetime.datetime.now)
    author = db.relationship('Author', 
        secondary=CoAuthor, backref='resource', lazy = 'select')

class Publication(db.Model):
    __tablename__ = "publication"
    id = db.Column(db.Integer, primary_key = True)
    publisher_id = db.Column(db.Integer, db.ForeignKey('publisher.id'))
    publication_type = db.Column(db.String(100))
    publication_date = db.Column(db.DateTime)
    doi = db.Column(db.String(100))
    resource = db.relationship('Resource', backref = 'publication', lazy = "select", uselist=False)

class Publisher(db.Model):
    __tablename__ = "publisher"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    publication = db.relationship('Publication', backref = 'publisher', lazy = 'select')

class Author(db.Model):
    __tablename__ = "author"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(100))
    about = db.Column(db.String(100))

class ResourceSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Resource

