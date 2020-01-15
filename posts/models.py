from django.db import models


class feed(models.Model):
    id = models.IntegerField(primary_key=True)
    author = models.CharField(max_length=50)
    title = models.CharField(max_length=100)
    body = models.TextField()

