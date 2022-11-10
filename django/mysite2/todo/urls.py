from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name="todos"),
    path('/delete', views.delete, name="deletetodo"),
]