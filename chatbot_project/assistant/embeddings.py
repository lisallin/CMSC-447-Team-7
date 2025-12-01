#load in sentence transofmers model 
#generate embeddings 
#store embeddings in mongoDB

from sentence_transformers import SentenceTransformer

embedding_model = SentenceTransformer("all-MiniLM-L6-v2")

def embed_text(text: str):
    return embedding_model.encode(text).tolist()