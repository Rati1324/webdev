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
        todo = ToDo.objects.create(name = request.POST['todoValue'], done = False)
        todo.save()
        return JsonResponse(todo.id, safe=False)

def delete(request):
    if request.method == "POST":
        todo = ToDo.objects.all().filter(id=request.POST['id'])
        todo.delete()
        return JsonResponse("deteted", safe=False)
        # todos = ToDo.objects.all()
        # serialized_todos = serializers.serialize('json', todos)
        # return JsonResponse(serialized_todos, safe=False)

def finish(request):
    if request.method == "POST":
        todo = ToDo.objects.get(id=request.POST['id'])
        todo.done = not todo.done
        todo.save()
        return JsonResponse({"changed to": "Finished" if todo.done else "Not finished"}, safe=False)