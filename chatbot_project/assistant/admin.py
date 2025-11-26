from django_mongoengine import mongo_admin
from .models import FAQ

class FAQAdmin(mongo_admin.DocumentAdmin):
    list_display = ('question', 'answer')
    search_fields = ('question',)
    #fields = ('question', 'answer')  # ensures fields show in Add/Edit form

mongo_admin.site.register(FAQ, FAQAdmin)
