# assistant/api.py

# 1:21pm 11/17 -> created api.py to do the talking between backend and frontend

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FAQ
from .serializers import FAQSerializer


@api_view(["GET"])
def faq_list(request):
    faqs = FAQ.objects.all()
    serializer = FAQSerializer(faqs, many=True)
    return Response(serializer.data)


@api_view(["POST"])
def mock_ai(request):
    user_message = request.data.get("message", "").lower()

    # Simple keyword matching
    for faq in FAQ.objects.all():
        if faq.question.lower() in user_message:
            return Response({"reply": faq.answer})

    return Response({"reply": "I'm not sure about that yet — try asking differently!"})