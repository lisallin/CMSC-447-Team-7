# assistant/views.py
from django.shortcuts import render, redirect
from .models import FAQ
from django.http import HttpResponse

def home(request):
    return HttpResponse('<a href="/admin/">Go to Admin Dashboard</a>')

# 11:57 AM 11/7
def faq_list(request):
    faqs = FAQ.objects.all()
    return render(request, 'assistant/faq_list.html', {'faqs': faqs})

'''
    *** As of 1:07pm we are using the built in mongoengine add function. this has some of the ***
        functionality but we don't know if we'll need any of this later on
def manage_faqs(request):
    # Add FAQ
    if request.method == 'POST':
        question = request.POST.get('question')
        answer = request.POST.get('answer')
        if question and answer:
            FAQ(question=question, answer=answer).save()
            return redirect('.')  # reload page

    # Delete FAQ
    delete_id = request.GET.get('delete')
    if delete_id:
        FAQ.objects(id=delete_id).delete()
        return redirect('.')

    # Get all FAQs
    faqs = FAQ.objects.all()

    print("POST:", request.POST)
    print("GET:", request.GET)
    print("FAQ count:", FAQ.objects.count())
    return render(request, 'admin/manage_faqs.html', {'faqs': faqs})
'''
