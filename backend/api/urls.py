from django.urls import path
from .views import libroview
from .views import registrouser


urlpatterns = [
    # path('get/', views.getBlogs),
    # path('post/', views.postBlog),
    # path('put/<int:pk>/', views.putBlog),
    # path('delete/<int:pk>/', views.deleteBlog),
    ####de mas link del proyecto###
    path("libro/", libroview.as_view(), name="libro"),
    path("libro/<int:id>", libroview.as_view(), name="librosId"),
    path("user/", registrouser.as_view(), name="user"),
    path("user/<int:id>", registrouser.as_view(), name="userId"),
    
####################################################################
    # path('api/libros/', views.guardar_libro, name='guardar_libro'),
    # path('api/libros/<int:libro_id>/', views.editar_libro, name='editar_libro'),
    # path('api/libros/<int:libro_id>/', views.borrar_libro, name='borrar_libro'),
]
