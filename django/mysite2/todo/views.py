from django.shortcuts import render
from .models import ToDo
from django.http import JsonResponse
import json 
from django.core import serializers
from .models import ToDo 

def index(request):
    todos = ToDo.objects.all()
    return render(request, "index.html", {'todos': todos})

def insert(request):
    if request.method == "POST":
        

def delete(request):
    if request.method == "POST":
        todo = ToDo.objects.all().filter(id=request.POST['id'])
        todo.delete()
        todos = ToDo.objects.all()
        # serialized_todos = serializers.serialize('json', todos)
        # return JsonResponse(serialized_todos, safe=False)
