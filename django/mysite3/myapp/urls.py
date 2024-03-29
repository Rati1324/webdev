from django.urls import path, include
from . import views 

urlpatterns = [
    path('', views.home, name="home"),
    path('register', views.register, name="register"),
    path('', include("django.contrib.auth.urls")),
    path('create_post', views.create_post),
    path('post/<int:post_id>', views.post_details),
]