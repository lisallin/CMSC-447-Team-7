"""
URL configuration for mysite project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

# 1:23pm 11/17 added api stuff

from django.urls import path, include
from django_mongoengine import mongo_admin
from assistant.api import faq_list, mock_ai

urlpatterns = [
    path('admin/', mongo_admin.site.urls),
    path('', include('assistant.urls')),
    path("api/faqs/", faq_list),
    path("api/ai/", mock_ai),
]


