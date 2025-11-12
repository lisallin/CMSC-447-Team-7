#12:55 pm 11/7
# assistant/models.py
from django_mongoengine import Document, fields

class FAQ(Document):
    question = fields.StringField(blank=False)
    answer = fields.StringField(blank=False)
