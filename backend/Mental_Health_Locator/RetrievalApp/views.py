from django.shortcuts import render

# Create your views here.
from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from Mental_Health_Locator.settings import PLACES_API

from django.core.files.storage import default_storage

from RetrievalApp.models import LocInfo
from RetrievalApp.serializers import LocInfoSerializer

import googlemaps

from django.db import IntegrityError

def mapNearbyLocations(address:str, doctype:str):
    locations = [] #python uses hashmap
    gmaps = googlemaps.Client(key=PLACES_API)
    response = gmaps.geocode(address)[0]

    geometry = response['geometry']

    location = (geometry['location']['lat'], geometry['location']['lng'])
    search_string= doctype

    results = gmaps.places_nearby(
        location=location,
        keyword=search_string,
        radius=2000,
    )

    for loc in results['results']:
        try:
            print(loc)
            t = LocInfo.objects.get_or_create(
                Name=loc['name'], 
                PlaceId=loc['place_id'], 
                Rating=loc['rating'],
                StreetAddress=loc['vicinity'],
                DocType=search_string
                )   
            locations.append(t[0])
        except IntegrityError as e:
            if 'unique constraint' in e.args[0]:
                t = LocInfo.objects.get(PlaceId=loc['place_id'])
                locations.append(t[0])
    return locations



@csrf_exempt
def RetrievalAPI(request):
    if request.method == "GET":
        address = request.GET.get('addy')
        doctype = request.GET.get('doctype')
        locations_data = mapNearbyLocations(address, doctype)
        locations_serializer = LocInfoSerializer(locations_data, many=True)
        return JsonResponse(locations_serializer.data, safe=False)

