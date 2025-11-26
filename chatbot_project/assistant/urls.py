from django.urls import path
from . import views

urlpatterns = [
    path('faqs/', views.faq_list, name='faq_list'), #go to faq script page
    path('', views.home, name="home"),  #go to admin dashboard link
]
