from django.apps import AppConfig
from mongoengine import connect, disconnect


class AssistantConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'assistant'
    def ready(self):

        # Connect once when the app is ready
        connect(
            db="faq_database",
            host="mongodb://localhost:27017/faq_database",
            alias='mongo'
        )