from django_mongoengine import mongo_admin
from django.shortcuts import redirect
from .models import FAQ, Category
from django.contrib import messages
from mongoengine.errors import NotUniqueError


#what is faq_changelist and figure out how to just navigate back to respective faq and categroy pages
class CategoryAdmin(mongo_admin.DocumentAdmin):
    list_display = ('name',)
    form_fields = ('name',)

    def delete_view(self, request, object_id, extra_context=None):
        Category.objects(id=object_id).delete()
        return redirect('mongo_admin:assistant_category_changelist')
    def save_model(self, request, obj, form, change):
        try:
            obj.save()  # try to save the Category
        except NotUniqueError:
            messages.error(request, f"A category with the name '{obj.name}' already exists.")
    

class FAQAdmin(mongo_admin.DocumentAdmin):
    list_display = ('question', 'answer', 'category')
    search_fields = ('question',)
    form_fields = ('question', 'answer', 'category')  # ensures fields show in Add/Edit form
    # actions = ['delete_selected']
    def has_delete_permissions(self, request, obj=None):
        return True
    def delete_view(self, request, object_id, extra_context=None):
        FAQ.objects(id=object_id).delete()
        return redirect('mongo_admin:assistant_faq_changelist')

mongo_admin.site.register(FAQ, FAQAdmin)
mongo_admin.site.register(Category, CategoryAdmin)
