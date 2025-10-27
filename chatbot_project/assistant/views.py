from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    return HttpResponse('<a href="/admin/">Go to Admin Dashboard</a>')

