from rest_framework import serializers
from .models import YTDl


class YTDLSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = YTDl
        fields = ('url',)
