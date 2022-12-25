from django.contrib import admin
from django.urls import path, include
from django.shortcuts import render, redirect

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('myapp.urls')),
    path('', include("django.contrib.auth.urls")),
]
