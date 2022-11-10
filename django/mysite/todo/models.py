from django.db import models

class ToDo(models.Model):
    Title = models.AutoField(primary_key=True)
    Description = models.CharField(max_length=100)