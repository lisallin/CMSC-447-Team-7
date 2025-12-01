from langchain_community.llms import Ollama 

llm = Ollama(model="phi3")

def generate_answer(user_question, context_faqs, history=None):
    faq_q, faq_a = context_faqs[0]

    messages = []

    if history: 
        for turn in history: 
            messages.append({
                    "role": turn.get("role", "user"),
                    "content": turn.get("content", "")
            })

    #adds RAG content
    messages.append({
        "role": "system", 
        "content": (
            "Here is relevant information from UMBC's official FAQ database.\n"
            "Use ONLY this information unless the user asks something general.\n\n"
            f"FAQ Match:\nQ: {faq_q}\nA: {faq_a}\n"
        )
    })

    #users new question
    messages.append({"role": "user", "content": user_question})

    #call the llm
    response = llm.invoke(messages)

    if isinstance(response, str):
        return response
    if hasattr(response, "content"):
        return response.content

    return str(response)
