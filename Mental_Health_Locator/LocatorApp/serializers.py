from rest_framework import serializers
from LocatorApp.models import Location

class LocationSerializer(serializers.ModelSerializer):
    class Meta:
            model = Location
            fields = ('Address',
                      'Date')
