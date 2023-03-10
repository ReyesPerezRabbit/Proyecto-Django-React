from django.contrib import admin
from .models import libro
from .models import registrousuario

# Register your models here.

admin.site.register(libro)
admin.site.register(registrousuario)