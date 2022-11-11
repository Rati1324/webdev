from django.db import models

class ToDo(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40)
    done = models.BooleanField()

    class Meta:
        get_latest_by = ['id']