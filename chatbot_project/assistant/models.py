# assistant/models.py

# Date and time of when changes were made
# 12:55pm, 11/7
# 1:14pm, 11/17 -> changing to link backend to frontend vite-react-app
from django_mongoengine import Document, fields
from mongoengine import NULLIFY, ListField, FloatField, ReferenceField, Document as ME_Document



class Category(Document):
    meta = {'db_alias': 'mongo', 
            'verbose_name': 'Category', 
            'verbose_name_plural': 'Categories'}
    name = fields.StringField(blank=True, unique=True)
    def __str__(self):
        return self.name
    
#mongoengine implementation 
class FAQ(Document):
    meta = {'db_alias': 'mongo'}
    question = fields.StringField(blank=False)
    answer = fields.StringField(blank=False)
    category = fields.ReferenceField(Category, blank=True, reverse_delete_rule=NULLIFY)

class FAQEmbedding(ME_Document):
    faq = ReferenceField(FAQ, required=True)
    embedding = ListField(FloatField(), required=True)

#django_mongoengine implementation
# class FAQ(Document):
#     meta = {'db_alias': 'mongo'}
#     question = fields.StringField(blank=False)
#     answer = fields.StringField(blank=False)
#     category = fields.ReferenceField(Category, blank=True, reverse_delete_rule=NULLIFY)
#     embedding = ListField(FloatField()) #MongoDB will naturally handle embedding 




