from django.shortcuts import render
from django.http.response import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
from .serializers import LibroSerializer
from django.http import JsonResponse


# tabla de la base de libro
from .models import Libro
class LibroView(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, id=0):
        if id > 0:
            try:
                libro = Libro.objects.get(id=id)
                datos = {"message": "Success", "libros": {
                    "id": libro.id,
                    "codigo": libro.codigo,
                    "cantidad": libro.cantidad,
                    "nombreLibro": libro.nombreLibro,
                    "autor": libro.autor,
                    "carrera": libro.carrera,
                    "descripcion": libro.descripcion,
                }}
            except Libro.DoesNotExist:
                datos = {"message": "Registro del libro no encontrado."}
        else:
            libros = Libro.objects.all()
            if libros:
                datos = {"message": "Success", "libreria": list(libros.values())}
            else:
                datos = {"message": "Libros no encontrados."}
        return JsonResponse(datos)

    def post(self, request):
        try:
            jd = json.loads(request.body)
            Libro.objects.create(
                codigo=jd["codigo"],
                cantidad=jd["cantidad"],
                nombreLibro=jd["nombreLibro"],
                autor=jd["autor"],
                carrera=jd["carrera"],
                descripcion=jd["descripcion"],
            )
            datos = {"mensaje": "Success: Libro agregado correctamente."}
        except Exception as e:
            datos = {"message": "Error: No se pudo agregar el libro.", "error": str(e)}
        return JsonResponse(datos)

    def put(self, request, id):
        try:
            jd = json.loads(request.body)
            libro = Libro.objects.get(id=id)
            libro.codigo = jd["codigo"]
            libro.cantidad = jd["cantidad"]
            libro.nombreLibro = jd["nombreLibro"]
            libro.autor = jd["autor"]
            libro.carrera = jd["carrera"]
            libro.descripcion = jd["descripcion"]
            libro.save()
            datos = {"mensaje": "Success: Libro actualizado correctamente."}
        except Libro.DoesNotExist:
            datos = {"message": "Error: Registro de libro no encontrado."}
        except Exception as e:
            datos = {"message": "Error: No se pudo actualizar el libro.", "error": str(e)}
        return JsonResponse(datos)
    
    def delete(self, request, id):
        try:
            libro = Libro.objects.get(id=id)
            libro.delete()
            datos = {"mensaje": "Success: Registro de libro eliminado correctamente."}
        except Libro.DoesNotExist:
            datos = {"message": "Error: Registro de libro no encontrado."}
        except Exception as e:
            datos = {"message": "Error: No se pudo eliminar el libro.", "error": str(e)}
        return JsonResponse(datos)



###################################################################################################

# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
# from .models import Libro
# from .serializers import LibroSerializer

# @csrf_exempt
# def create_or_update_libro(request, id=None):
#     if request.method == 'GET':
#         if id is not None:
#             try:
#                 libro = Libro.objects.get(id=id)
#                 serializer = LibroSerializer(libro)
#                 return JsonResponse(serializer.data, status=200)
#             except Libro.DoesNotExist:
#                 return JsonResponse({'error': 'Libro no encontrado.'}, status=404)
#         else:
#             libros = Libro.objects.all()
#             serializer = LibroSerializer(libros, many=True)
#             return JsonResponse({'libreria': serializer.data}, status=200)
#     elif request.method == 'POST':
#         serializer = LibroSerializer(data=request.data)  # Usamos request.data en lugar de request.POST
#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data, status=201)
#         else:
#             return JsonResponse(serializer.errors, status=400)
#     elif request.method == 'PUT':
#         if id is not None:
#             try:
#                 libro = Libro.objects.get(id=id)
#                 serializer = LibroSerializer(libro, data=request.data)  # Usamos request.data en lugar de request.POST
#                 if serializer.is_valid():
#                     serializer.save()
#                     return JsonResponse(serializer.data, status=200)
#                 else:
#                     return JsonResponse(serializer.errors, status=400)
#             except Libro.DoesNotExist:
#                 return JsonResponse({'error': 'Libro no encontrado.'}, status=404)

# @csrf_exempt
# def delete_libro(request, id):
#     if request.method == 'DELETE':
#         try:
#             libro = Libro.objects.get(id=id)
#             libro.delete()
#             return JsonResponse({'message': 'Libro eliminado correctamente.'}, status=200)
#         except Libro.DoesNotExist:
#             return JsonResponse({'error': 'Libro no encontrado.'}, status=404)



################################################################################################################################

#para Libros
# from .models import libro
# @csrf_exempt
# def guardar_libro(request):
#     if request.method == 'POST':
#         codigo = request.POST.get('codigo')
#         nombreLibro = request.POST.get('nombreLibro')
#         autor = request.POST.get('autor')
#         cantidad = request.POST.get('cantidad')
#         descripcion = request.POST.get('descripcion')
#         imagen = request.FILES.get('imagen')
        
#         Libro = libro(
#             codigo=codigo,
#             nombreLibro=nombreLibro,
#             autor=autor,
#             cantidad=cantidad,
#             descripcion=descripcion,
#             imagen=imagen
#         )
#         Libro.save()
        
#         return JsonResponse({'mensaje': 'Libro guardado correctamente.'})
    
#     return JsonResponse({'error': 'Método no permitido.'})

# @csrf_exempt
# def borrar_libro(request, libro_id):
#     if request.method == 'POST':
#         try:
#             Libro = libro.objects.get(id=libro_id)
#             Libro.delete()
#             return JsonResponse({'mensaje': 'Libro borrado correctamente.'})
#         except libro.DoesNotExist:
#             return JsonResponse({'error': 'Libro no encontrado.'})
    
#     return JsonResponse({'error': 'Método no permitido.'})

# @csrf_exempt
# def editar_libro(request, libro_id):
#     if request.method == 'POST':
#         try:
#             Libro = libro.objects.get(id=libro_id)
#             Libro.codigo = request.POST.get('codigo')
#             Libro.nombreLibro = request.POST.get('nombreLibro')
#             Libro.autor = request.POST.get('autor')
#             Libro.cantidad = request.POST.get('cantidad')
#             Libro.descripcion = request.POST.get('descripcion')
#             Libro.imagen = request.FILES.get('imagen')
#             Libro.save()
            
#             return JsonResponse({'mensaje': 'Libro editado correctamente.'})
#         except Libro.DoesNotExist:
#             return JsonResponse({'error': 'Libro no encontrado.'})
    
#     return JsonResponse({'error': 'Método no permitido.'})

###############################################################################################################

# from django.http import JsonResponse
# from django.views import View
# from django.views.decorators.csrf import csrf_exempt
# from .models import libro

# @csrf_exempt
# class LibroDetailView(View):
#     def delete(self, request, id):
#         try:
#             Libro = libro.objects.get(id=id)
#             Libro.delete()
#             datos = {"message": "Success: Registro de libro eliminado correctamente."}
#         except libro.DoesNotExist:
#             datos = {"message": "Error: Registro de libro no encontrado."}
#         return JsonResponse(datos)



################################

# tabla de registrousuario
from .models import registrousuario

class registrouser(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)

    def get(self, request, matricula=0):
        if matricula > 0:
            useregister = list(
                registrousuario.objects.filter(matricula=matricula).values()
            )
            if len(useregister) > 0:
                registeruser = useregister[0]
                datosuser = {"menssage": "Seccess", "useregister": registeruser}
            else:
                datosuser = {"menssage": "usuario no se encontrado"}
            return JsonResponse(datosuser)
        else:
            useregister = list(registrousuario.objects.values())
            if len(useregister) > 0:
                datosuser = {"menssage": "Seccess", "useregister": useregister}
            else:
                datosuser = {"menssage": "usuario no existe"}
            return JsonResponse(datosuser)

    def post(self, request):
        jd = json.loads(request.body)
        registrousuario.objects.create(
            matricula=jd["matricula"],
            nombrealumno=jd["nombrealumno"],
            apellidoP=jd["apellidoP"],
            apellidoM=jd["apellidoM"],
            correo=jd["correo"],
            telefono=jd["telefono"],
            edad=jd["edad"],
            carrera=jd["carrera"],
            user=jd["user"],
            genero=jd["genero"],
            password=jd["password"],
        )
        datos = {"message": "Success"}
        return JsonResponse(datos)

    def put(self, request, matricula):
        jd = json.loads(request.body)
        useregister = list(registrousuario.objects.filter(matricula=matricula).values())
        if len(useregister) > 0:
            registeruser = registrousuario.objects.get(matricula=matricula)
            registeruser.matricula = jd["matricula"]
            registeruser.nombrealumno = jd["nombrealumno"]
            registeruser.apellidoP = jd["apellidoP"]
            registeruser.apellidoM = jd["apellidoM"]
            registeruser.correo = jd["correo"]
            registeruser.telefono = jd["telefono"]
            registeruser.edad = jd["edad"]
            registeruser.carrera = jd["carrera"]
            registeruser.user = jd["user"]
            registeruser.genero = jd["genero"]
            registeruser.password = jd["password"]
            registeruser.save()
            datouser = {"message": "Success"}
        else:
            datouser = {"message": "Libro not found..."}
        return JsonResponse(datouser)

    def delete(self, request, matricula):
        useregister = list(registrousuario.objects.filter(matricula=matricula).values())
        if len(useregister) > 0:
            registrousuario.objects.filter(matricula=matricula).delete()
            datouser = {"message": "Success"}
        else:
            datouser = {"message": "libro not found..."}
        return JsonResponse(datouser)


# @csrf_exempt
# def user(request):
#     if request.method == 'POST':
#         matricula = request.POST.get("matricula")
#         nombrealumno = request.POST.get("nombrealumno")
#         apellidoP = request.POST.get("apellidoP")
#         apellidoM = request.POST.get("apellidoM")
#         correo = request.POST.get("correo")
#         telefono = request.POST.get("telefono")
#         edad = request.POST.get("edad")
#         carrera = request.POST.get("carrera")
#         genero = request.POST.get("genero")
#         usuario = request.POST.get("usuario")
#         password = request.POST.get("password")

#         user_register = registeruser(
#             matricula=matricula,
#             nombrealumno=nombrealumno,
#             apellidoP=apellidoP,
#             apellidoM=apellidoM,
#             correo=correo,
#             telefono=telefono,
#             edad=edad,
#             carrera=carrera,
#             genero=genero,
#             usuario=usuario,
#             password=password
#         )
#         user_register.save()

#         return JsonResponse({'status': 'success'})
#     return JsonResponse({'status': 'error'})




################################################################################################

#Para Usuario
# from api.models import registrousuario

# @csrf_exempt
# def guardar_datos(request):
#     if request.method == 'POST':
#         matricula = request.POST.get('matricula')
#         nombrealumno = request.POST.get('nombrealumno')
#         apellidoP = request.POST.get('apellidoP')
#         apellidoM = request.POST.get('apellidoM')
#         correo = request.POST.get('correo')
#         telefono = request.POST.get('telefono')
#         edad = request.POST.get('edad')
#         carrera = request.POST.get('carrera')
#         genero = request.POST.get('genero')
#         user = request.POST.get('user')
#         password = request.POST.get('password')

#         registro_usuario = registrousuario(
#             matricula=matricula,
#             nombrealumno=nombrealumno,
#             apellidoP=apellidoP,
#             apellidoM=apellidoM,
#             correo=correo,
#             telefono=telefono,
#             edad=edad,
#             carrera=carrera,
#             genero=genero,
#             user=user,
#             password=password
#         )
#         registro_usuario.save()

#         return JsonResponse({'message': 'Data saved successfully'})

# @csrf_exempt
# def editar_datos(request, dato_id):
#     if request.method == 'PUT':
#         try:
#             registro_usuario = registrousuario.objects.get(id=dato_id)
#         except registrousuario.DoesNotExist:
#             return JsonResponse({'error': 'Data not found'}, status=404)

#         registro_usuario.matricula = request.POST.get('matricula')
#         registro_usuario.nombrealumno = request.POST.get('nombrealumno')
#         registro_usuario.apellidoP = request.POST.get('apellidoP')
#         registro_usuario.apellidoM = request.POST.get('apellidoM')
#         registro_usuario.correo = request.POST.get('correo')
#         registro_usuario.telefono = request.POST.get('telefono')
#         registro_usuario.edad = request.POST.get('edad')
#         registro_usuario.carrera = request.POST.get('carrera')
#         registro_usuario.genero = request.POST.get('genero')
#         registro_usuario.user = request.POST.get('user')
#         registro_usuario.password = request.POST.get('password')
#         registro_usuario.save()

#         return JsonResponse({'message': 'Data updated successfully'})

# @csrf_exempt
# def borrar_datos(request, dato_id):
#     if request.method == 'DELETE':
#         try:
#             registro_usuario = registrousuario.objects.get(id=dato_id)
#         except registrousuario.DoesNotExist:
#             return JsonResponse({'error': 'Data not found'}, status=404)

#         registro_usuario.delete()

#         return JsonResponse({'message': 'Data deleted successfully'})