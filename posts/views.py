from __future__ import unicode_literals
# where did the above code come from
# -----------------------------------
# -----------------------------------
from django.shortcuts import render
from django.core import serializers
from django.http import HttpResponse
from .models import feed
import json

# Create your views here.
def index(request):
    template = "posts/index.html"
    results = feed.objects.all()
    context = {
        "results": results,
    }
    return render(request, template, context)

# fetching news feeds from mysql table using js fetch API

def getdata(request):
    results = feed.objects.all()
    jsondata = serializers.serialize("json", results)
    return HttpResponse(jsondata)

def base_layout(request):
    template = "posts/base.html"
    return render(request, template)


