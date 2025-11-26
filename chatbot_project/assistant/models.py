# assistant/models.py

# Date and time of when changes were made
# 12:55pm, 11/7
# 1:14pm, 11/17 -> changing to link backend to frontend vite-react-app
from django_mongoengine import Document, fields

class FAQ(Document):
    question = fields.StringField(blank = False, max_length = 255)
    answer = fields.StringField(blank = False)

    meta = {
        "collection": "faq"
    }

