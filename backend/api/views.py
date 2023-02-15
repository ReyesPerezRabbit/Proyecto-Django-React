
from rest_framework.response import Response 
from rest_framework.serializers import Serializer
from rest_framework.decorators import api_view

from .models import Blog
from .serializers import BlogSerializer


@api_view(['GET'])
def getBlogs(request):
    blog = Blog.objects.all()
    serializer = BlogSerializer(blog, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def postBlog(request):
    data = request.data
    blog = Blog.objects.create(
        body= data['body']
    )
    serializer = BlogSerializer(blog, many=False)
    return Response(serializer.data)

@api_view(['PUT'])
def putBlog(request, pk):
    data = request.data
    blog = Blog.objects.get(id=pk)
    serializer = BlogSerializer(instance=blog, data=data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)

@api_view(['DELETE'])
def deleteBlog(request, pk):
    blog = Blog.objects.get(id=pk)
    blog.delete()
    return Response('Blog Eliminado')
###############################################################################

#parte del login
from django.contrib.auth import authenticate, login
from django.http import JsonResponse

def user_login(request):
    username = request.POST.get('username')
    password = request.POST.get('password')
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        return JsonResponse({'status': 'success'})
    else:
        return JsonResponse({'status': 'error'})

#para dar de alta
import json
from django.contrib.auth.models import User
from django.http import JsonResponse
@api_view(['POST'])
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body.decode('utf-8'))
        username = data['username']
        email = data['email']
        password = data['password']

        user = User.objects.create_user(
            username=username,
            email=email,
            password=password
        )
        user.save()

        return JsonResponse({'message': 'Usuario creado con éxito'})
    else:
        return JsonResponse({'message': 'Método no permitido'})

#para guardar datos en añador usuarios

# from django.shortcuts import render, redirect
# from .models import FormData

# def save_form_data(request):
#     if request.method == 'POST':
#         name = request.POST['name']
#         email = request.POST['email']
#         message = request.POST['message']
#         FormData.objects.create(name=name, email=email, message=message)
#         return redirect('success_page')
#     return render(request, 'form.html')
