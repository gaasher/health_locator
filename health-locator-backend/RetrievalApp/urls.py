from os import stat
from django.conf.urls import url
from django.urls.conf import path
from RetrievalApp import views


urlpatterns = [
    url(r'^results/$', views.RetrievalAPI)
]