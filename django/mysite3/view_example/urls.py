from django.urls import path, include
from . import views 

urlpatterns = [
    path('', views.index),
    path('index2/<int:id>', views.index2),
    path('index3/<int:id>', views.index3),
]