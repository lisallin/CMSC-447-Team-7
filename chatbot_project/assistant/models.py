# assistant/models.py

# Date and time of when changes were made
# 12:55pm, 11/7
# 1:14pm, 11/17 -> changing to link backend to frontend vite-react-app
from django_mongoengine import Document, fields
from mongoengine import NULLIFY

# class User(Document):
#     meta = {'db_alias': 'mongo'}
#     name = fields.StringField(blank=False)
#     email = fields.StringField(blank=False, unique=True)
#     username = fields.StringField(blank=False, unique=True)
#     password = fields.StringField(blank=False, unique=True)



class Category(Document):
    meta = {'db_alias': 'mongo', 
            'verbose_name': 'Category', 
            'verbose_name_plural': 'Categories'}
    name = fields.StringField(blank=False, unique=True)
    def __str__(self):
        return self.name


class FAQ(Document):
    meta = {'db_alias': 'mongo'}
    question = fields.StringField(blank=False)
    answer = fields.StringField(blank=False)
    category = fields.ReferenceField(Category, blank=True, reverse_delete_rule=NULLIFY)

