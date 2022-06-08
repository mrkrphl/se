from app import app
from config import DEBUG
from app import db
from app.resource_module.resource_model import Author,Resource, Publication, Publisher, CoAuthor
from datetime import datetime

if __name__ == "__main__":
    app.run(debug=DEBUG)

def bootstrap_data():
    db.drop_all()
    db.create_all()
    

    r = Resource(title = "Book of Law", 
                abstract = "This is nothing but the book of law for which you shall abide to until death.",
                url = "www.bookoflaw.com/book",
                date_added = "1998-01-23 12:45:56",
                )

    p = Publication(publication_type = "Book",
                    publication_date = ("1998-01-23 12:45:56"),
                    doi = "Ewan"
                    )

    a = Author(name = "Mark",
                    about = "Very handsome boy")
    
    pd = Publisher(name = "Mark Publications")

    b = Author(name = "Raphael", about = "Super pogi")
    db.session.add(r)

    db.session.add(p)
    db.session.add(a)
    db.session.add(pd)
    
    p.resource  = r
    pd.publication.append(p)


    r.author.extend((a, b))

    db.session.commit()