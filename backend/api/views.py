from django.shortcuts import render
from django.http.response import JsonResponse
from django.views import View
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
import json
from PIL import Image



# tabla de la base de libro

from .models import libro
class libroview(View):
    @method_decorator(csrf_exempt)
    def dispatch(self, request, *args, **kwargs):
        return super().dispatch(request, *args, **kwargs)
    # para mostrar los datos
    def get(self, request, id=0):
        if id > 0:
            libreria = list(libro.objects.filter(id=id).values())
            if len(libreria) > 0:
                libros = libreria[0]
                datos = {"message": "Success", "libros": libros}
            else:
                datos = {"message": "registro del libro not found..."}
            return JsonResponse(datos)
        else:
            libreria = list(libro.objects.values())
            if len(libreria) > 0:
                datos = {"message": "Success", "libreria": libreria}
            else:
                datos = {"message": "libros not found..."}
            return JsonResponse(datos)

    # para agregare datos libro es la tabla en models
    def post(self, request):
        # print(request.body)
        jd = json.loads(request.body)
        print(jd)
        libro.objects.create(
            codigo=jd["codigo"],
            cantidad=jd["cantidad"],
            nombreLibro=jd["nombreLibro"],
            autor=jd["autor"],
            descripcion=jd["descripcion"],
            
        )
        datos = {"mensaje": "Seccess"}
        return JsonResponse(datos)

#     # para editar por id
#     def put(self, request, id):
#         jd = json.loads(request.body)
#         libreria = list(libro.objects.filter(id=id).values())
#         if len(libreria) > 0:
#             librerias = libro.objects.get(id=id)
#             librerias.codigo = jd["codigo"]
#             librerias.cantidad = jd["cantidad"]
#             librerias.nombreLibro = jd["nombreLibro"]
#             librerias.autor = jd["autor"]
#             librerias.descripcion = jd["descripcion"]
#             librerias.save()
#             datos = {"mensaje": "Seccess"}
#         else:
#             datos = {"message": "registro not found..."}
#         return JsonResponse(datos)

#     #    para borrar
#     def delete(self, request, id):
#         libreria = list(libro.objects.filter(id=id).values())
#         if len(libreria) > 0:
#             libro.objects.filter(id=id).delete()
#             datos = {"message": "Success"}
#         else:
#             datos = {"message": "registro de libro not found..."}
#         return JsonResponse(datos)

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