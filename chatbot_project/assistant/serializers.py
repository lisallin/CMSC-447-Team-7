# assistant/serializers.py

# 1:18pm 11/17 -> created serializers.py because it is needed to convert python to json

from rest_framework import serializers
from .models import FAQ

class FAQSerializer(serializers.Serializer):
    id = serializers.CharField()
    question = serializers.CharField()
    answer = serializers.CharField()

    def create(self, validated_data):
        return FAQ(**validated_data).save()

    def update(self, instance, validated_data):
        instance.question = validated_data.get("question", instance.question)
        instance.answer = validated_data.get("answer", instance.answer)
        instance.save()
        return instance