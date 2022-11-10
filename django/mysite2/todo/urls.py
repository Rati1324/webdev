from django.urls import path
from . import views 

urlpatterns = [
    path('', views.index, name="todos"),
    # path('/insert', views.insert, name="insert-todo"),
    path('/delete', views.delete, name="delete-todo"),
]