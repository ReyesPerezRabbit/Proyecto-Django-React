from django.db import models

# Create your models here.

class Blog(models.Model):
    body = models.CharField(max_length=50)

#base de datos para añadir usuarios 

# class FormData(models.Model):
#     name = models.CharField(max_length=100)
#     email = models.EmailField()
#     message = models.TextField()

