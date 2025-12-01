# assistant/api.py

# 1:21pm 11/17 -> created api.py to do the talking between backend and frontend


#clarify how the embedding is implemented
#clarify how the llm is implemented 
#confirm that it is mongoengine's ui we are using for the dashboard but it is still django's built in dashboard 

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import FAQ, FAQEmbedding, Category
from .serializers import FAQSerializer
from .embeddings import embed_text
from sklearn.metrics.pairwise import cosine_similarity
#from .rag import generate_answer
import numpy as np


@api_view(["GET"])
def faq_list(request):
    faqs = FAQ.objects.all()
    serializer = FAQSerializer(faqs, many=True)
    return Response(serializer.data)


#method before incorporating embedding model 
# @api_view(["POST"])
# def mock_ai(request):
#     user_message = request.data.get("message", "").lower()

#     # Simple keyword matching
#     for faq in FAQ.objects.all():
#         if faq.question.lower() in user_message:
#             return Response({"reply": faq.answer})

#     return Response({"reply": "I'm not sure about that yet — try asking differently!"})


# @api_view(["POST"])
# def mock_ai(request):
#     user_message = request.data.get("message", "")

#     #convery user query to embedding
#     query_embedding = embed_text(user_message)

#     #retreive top similar FAQs
#     results = retrieve_similar_faqs(query_embedding, top_k=3)

#     if not results: 
#         return Response({"reply": "I'm not sure about that yet — try asking differently!"})
    
#     #best match 
#     best_faq, score = results[0]

#     return Response({
#         "reply": best_faq.answer, 
#         "similarity": float(score),
#         "matched_question": best_faq.question
#     })


@api_view(["POST"])
def mock_ai(request):
    user_category = request.data.get("category", None)
    user_message = request.data.get("message", "")
    #history = request.data.get("conversation", []) 

    if not user_message:
        return Response({"reply": "Please ask a question!"})

    # 1. Embed user question
    query_embedding = embed_text(user_message)

    # 2. Retrieve all FAQ embeddings
    if user_category:
        category_obj = Category.objects(name=user_category).first()

        if not category_obj:
            return Response({"reply": f"Category '{user_category}' not found."})

        faqs_in_category = list(FAQ.objects.filter(category=category_obj))

        if not faqs_in_category:
            return Response({"reply": f"No FAQs found for category '{user_category}'."})

        embeddings_objs = list(FAQEmbedding.objects.filter(faq__in=faqs_in_category))
    else:
        embeddings_objs = list(FAQEmbedding.objects.all())

    #embeddings_objs = list(embeddings_objs)
    if not embeddings_objs:
        return Response({"reply": "No FAQs available yet."})

    vectors = np.array([obj.embedding for obj in embeddings_objs])
    similarities = cosine_similarity([query_embedding], vectors)[0]

    # 3. Get top match
    best_idx = np.argmax(similarities)
    best_faq = embeddings_objs[best_idx].faq
    best_score = similarities[best_idx]

    # Optional: threshold to avoid bad matches
    # if best_score < 0.4:
    #     return Response({"reply": "I'm not sure about that yet — try asking differently!"})
    if best_score < 0.2:
    # Not enough match — fallback to conversation only
        context = [("Conversation context", "No FAQ strongly matched.")]

    context = [(best_faq.question, best_faq.answer)]

    #llm response 
    #llm_reply = generate_answer(user_message, context, history=history)

    return Response({
        "reply": best_faq.answer,     #replace this with llm_reply to use llm
        "matched_question": best_faq.question, 
        "similarity": float(best_score)
    })