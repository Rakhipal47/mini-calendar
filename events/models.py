from django.db import models

class Event(models.Model):
    date = models.DateField()
    title = models.CharField(max_length=200)

    def __str__(self):
        return self.title

# Create your models here.
