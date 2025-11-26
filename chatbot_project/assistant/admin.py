from django_mongoengine import mongo_admin
from django.shortcuts import redirect
from .models import FAQ, Category
from django.contrib import messages
from mongoengine.errors import NotUniqueError
from django.utils.html import format_html
import re

URL_PATTERN = re.compile(
    r'(https?://[^\s]+)'
)

def linkify(text):
    #Convert plain URLs in text to clickable HTML links.
    return URL_PATTERN.sub(r'<a href="\1" target="_blank">\1</a>', text)

class CategoryAdmin(mongo_admin.DocumentAdmin):
    list_display = ('name',)
    form_fields = ('name',)
    search_fields = ('name',)

    def delete_view(self, request, object_id, extra_context=None):
        Category.objects(id=object_id).delete()
        return redirect('mongo_admin:assistant_category_changelist')
    def save_model(self, request, obj, form, change):
        try:
            obj.save()  # try to save the Category
        except NotUniqueError:
            messages.error(request, f"A category with the name '{obj.name}' already exists.")
    

#figure out a way to allow search for the faqs without using object id 
#do an error check for if the user enters an invalid search then will just display 0 results 
# fix the history button 
class FAQAdmin(mongo_admin.DocumentAdmin):
    readonly_fields = ('answer_preview',)
    list_display = ('question', 'render_answer', 'category')
    search_fields = ('category',)
    form_fields = ('question', 'answer', 'answer_preview', 'category')  # ensures fields show in Add/Edit form

    def render_answer(self, obj):
        return format_html(linkify(obj.answer))
    render_answer.short_description = "Answer"

    def answer_preview(self, obj):
        if obj and obj.answer:
            return format_html(linkify(obj.answer))
        return "No preview available"
    answer_preview.short_description = "Preview"

    #allows the user to delete an faq
    def delete_view(self, request, object_id, extra_context=None):
        FAQ.objects(id=object_id).delete()
        return redirect('mongo_admin:assistant_faq_changelist') #after deletion brings user back to faq page

mongo_admin.site.register(FAQ, FAQAdmin)
mongo_admin.site.register(Category, CategoryAdmin)
