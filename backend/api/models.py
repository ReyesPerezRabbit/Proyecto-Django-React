from django.db import models


# Create your models here.
class Blog(models.Model):
    body = models.CharField(max_length=50)


# base de datos para añadir usuarios

class incioseccion(models.Model):
    idinicio = models.AutoField(primary_key=True)
    usuario = models.CharField( max_length=50)
    password = models.CharField( max_length=50)


class registrousuario(models.Model):
    idregistrouser = models.AutoField(primary_key=True)
    matricula = models.CharField(max_length = 15)
    nombrealumno = models.CharField(max_length=100,blank=False)
    apellidoP = models.CharField(max_length=50,blank=False)
    apellidoM = models.CharField(max_length=50,blank=False)
    correo = models.EmailField(blank=False)
    telefono = models.CharField(max_length=20, blank=False, null=False)
    edad = models.IntegerField( blank=True)
    carrera = models.CharField(max_length=100,blank=False)
    genero = models.CharField(max_length=100,blank=False)
    usuario = models.CharField(max_length=50,blank=False)
    password = models.CharField(max_length=50,blank=False)

    def _str_(self):
        return self.matricula

    class Meta:
        db_table = "Registro_user"
        verbose_name = "Registro de usuarios"
    

# Datos del libro


class libro(models.Model):
    id_libro = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length = 150,blank=False)
    cantidad = models.IntegerField(blank=False)
    nombrelibro = models.CharField(max_length=150,blank=False)
    actor = models.CharField(max_length=100,blank=False)
    descripcion = models.TextField(blank=False)
    imagen = models.ImageField(upload_to='libros/', null=True, blank=True)

    
    def _str_(self):
        return self.codigo

    class Meta:
        db_table = "Libros"
        verbose_name = "Registro de Libros"

## Inventario


class inventario(models.Model):
    id_inventario = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=150)
    autor = models.CharField(max_length=100)
    area = models.CharField(max_length=150)
    detalle = models.CharField(max_length=150)
    cantidad_po = models.CharField(max_length=150)


# responsable de la bibliotca


class responsablebibli(models.Model):
    id_responsable = models.AutoField(primary_key=True)
    nombreresponsable = models.CharField(max_length=100)


# Devoluciones
class devolucion(models.Model):
    id_devoluciones = models.AutoField(primary_key=True)
    nombrelibro = models.CharField(max_length=150)
    fecha = models.DateField(auto_now=False, auto_now_add=False)
    acta = models.CharField(max_length=150)
    detalle = models.TextField()
    nombre_da = models.CharField(max_length=150)


# prestamos
class prestamo(models.Model):
    id_prestamo = models.IntegerField(primary_key=True)
    detalle = models.CharField(max_length=150)
    nombrealumno = models.CharField(max_length=150)
    actor = models.CharField(max_length=150)
    fecha = models.DateField(auto_now=False, auto_now_add=False)
    n_libro = models.CharField(max_length=150)


# #registro usuarios

# from django.db import models
# from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# class UserManager(BaseUserManager):
#     def create_user(self, email, password=None, **extra_fields):
#         if not email:
#             raise ValueError('El correo electrónico es obligatorio')
#         email = self.normalize_email(email)
#         user = self.model(email=email, **extra_fields)
#         user.set_password(password)
#         user.save()
#         return user

#     def create_superuser(self, email, password=None, **extra_fields):
#         extra_fields.setdefault('is_staff', True)
#         extra_fields.setdefault('is_superuser', True)

#         if extra_fields.get('is_staff') is not True:
#             raise ValueError('Los superusuarios deben tener is_staff=True.')
#         if extra_fields.get('is_superuser') is not True:
#             raise ValueError('Los superusuarios deben tener is_superuser=True.')

#         return self.create_user(email, password, **extra_fields)

# class User(AbstractBaseUser, PermissionsMixin):
#     email = models.EmailField(unique=True)
#     first_name = models.CharField(max_length=30)
#     last_name = models.CharField(max_length=30)
#     is_active = models.BooleanField(default=True)
#     is_staff = models.BooleanField(default=False)

#     USERNAME_FIELD = 'email'
#     REQUIRED_FIELDS = ['first_name', 'last_name']

#     objects = UserManager()

#     def _str_(self):
#         return self.email

#     def get_full_name(self):
#         return f"{self.first_name} {self.last_name}"

#     def get_short_name(self):
#         return self.first_name