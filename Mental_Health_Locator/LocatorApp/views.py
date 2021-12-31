from re import S
from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators import csrf
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from LocatorApp.models import Location
from LocatorApp.serializers import LocationSerializer

from django.core.files.storage import default_storage

@csrf_exempt
def LocatorAppAPI(request):
    if request.method == "POST":
        address_data = JSONParser().parse(request)
        address_serializer = LocationSerializer(data=address_data)
        if address_serializer.is_valid():
            address_serializer.save()
            return JsonResponse({'response':'added succesfully'})
        else:
            return JsonResponse({'response':'Failed to Add'})