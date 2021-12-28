from django.db import models

# Create your models here.
class LocInfo(models.Model):
    Name = models.CharField(max_length=200)
    PlaceId = models.CharField(max_length=200, primary_key=True)
    Rating = models.FloatField()
    StreetAddress = models.CharField(max_length=200)