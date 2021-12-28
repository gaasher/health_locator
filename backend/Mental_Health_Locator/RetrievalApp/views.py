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



def mapNearbyLocations(address):
    locations = [] #python uses hashmap
    gmaps = googlemaps.Client(key=PLACES_API)
    response = gmaps.geocode(address)[0]

    geometry = response['geometry']

    location = (geometry['location']['lat'], geometry['location']['lng'])
    search_string= "mental health clinic or hospital"

    results = gmaps.places_nearby(
        location=location,
        keyword=search_string,
        radius=2000,
    )

    for loc in results['results']:
        print(loc)
        try:
            t = LocInfo.objects.get_or_create(
                Name=loc['name'], 
                PlaceId=loc['place_id'], 
                Rating=loc['rating'],
                StreetAddress=loc['vicinity']
                )   
            locations.append(t[0])
        except LocInfo.DoesNotExist:
            pass
    return locations



@csrf_exempt
def RetrievalAPI(request):
    if request.method == "GET":
        address = request.GET['addy']
        locations_data = mapNearbyLocations(address)
        locations_serializer = LocInfoSerializer(locations_data, many=True)
        return JsonResponse(locations_serializer.data, safe=False)

#def returnResults
#function that gets the entry that corresponds to the specific time from the database
#calls the google places api so that it returns the places in a given area