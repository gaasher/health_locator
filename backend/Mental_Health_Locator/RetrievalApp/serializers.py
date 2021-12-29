from rest_framework import serializers
from RetrievalApp.models import LocInfo

class LocInfoSerializer(serializers.ModelSerializer):
    class Meta:
            model = LocInfo
            fields = ('Name',
                      'PlaceId',
                      'Rating',
                      'StreetAddress',
                      'DocType')