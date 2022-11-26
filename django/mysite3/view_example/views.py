from django.shortcuts import render
from django.http import HttpResponse, HttpResponseNotFound

def index(request):
    html = "<div> welcome to my site </div>"
    return HttpResponse(html)
    # return HttpResponseNotFound('<h1>Page not found</h1>')
    # return HttpResponse(status=201)

def index2(request, id):
    html = f"<div> your id: {id} </div>"
    return HttpResponse(html)

def index3(request, id):
    return render(request, "index.html", {'id': id})
