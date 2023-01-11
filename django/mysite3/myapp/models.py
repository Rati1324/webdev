from django.db import models
from django.contrib.auth.models import User

class Post(models.Model):
    title = models.CharField(max_length=50)
    body = models.TextField(max_length=200)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
