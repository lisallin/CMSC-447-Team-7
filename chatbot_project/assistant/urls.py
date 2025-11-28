from django.urls import path
from django.contrib import admin # added my eba
from . import views

urlpatterns = [
    path('faqs/', views.faq_list, name='faq_list'),
    path('admin/', admin.site.urls),  # Django admin at /admin/
    
]
