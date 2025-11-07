from django.apps import AppConfig
from mongoengine import connect, disconnect


class AssistantConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'assistant'
    def ready(self):
        # Disconnect any existing default alias to prevent duplicate connections
        disconnect(alias='default')

        # Connect once when the app is ready
        connect(
            db="faq_database",
            host="mongodb://localhost:27017/faq_database",
            alias='default'
        )