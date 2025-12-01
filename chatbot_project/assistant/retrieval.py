#calculates similarity 
#used for vector search 

import numpy as np
from .models import FAQ
from sklearn.metrics.pairwise import cosine_similarity 

def retrieve_similar_faqs(query_embedding, top_k=3):
    faqs = FAQ.objects.exclude(embedding_exists=False)
    if not faqs: 
        return []

    embeddings = np.array([faq.embedding for faq in faqs])
    similarities = cosine_similarity([query_embedding], embeddings)[0]

    faq_scores = list(zip(faqs, similarities))
    faq_scores.sort(key=lambda x: x[1], reverse=True)

    return faq_scores[:top_k]