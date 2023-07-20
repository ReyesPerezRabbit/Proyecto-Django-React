from django.urls import path
# from .views import libroview
from .views import LibroView
from .views import registrouser
# from . import views
#from .views import guardar_libro
# from .views import borrar_libro
# from .views import editar_libro


urlpatterns = [
    ####de mas link del proyecto###
    # path("libro/", libroview.as_view(), name="libro"),
    # path("libro/<int:id>", libroview.as_view(), name="librosId"),
    path("user/", registrouser.as_view(), name="user"),
    path("user/<int:id>", registrouser.as_view(), name="userId"),
    
    # URL para obtener todos los libros o crear uno nuevo
    path('libro/', LibroView.as_view(), name='get_post_libro'),

    # URL para obtener, actualizar o eliminar un libro específico
    path('libro/<int:id>/', LibroView.as_view(), name='get_put_libro'),
    
    # path('libro/', views.LibroView.as_view(), name='get_create_libro'),
    # path('libro/<int:id>/', views.LibroView.as_view(), name='get_update_delete_libro'),
    
####################################################################
#link de agregar libros 
# path('api/libro/<int:id>/', views.delete, name='delete_libro'),

    #path('libros/', guardar_libro.as_view(), name='guardar_libro'),
    # path('libros/<int:libro_id>/', editar_libro.as_view(), name='editar_libro'),
    # path('libros/<int:libro_id>/', borrar_libro.as_view(), name='borrar_libro'),
####################################################################
#Link de Agregar usuarios   

#####################################################
   # URL para obtener todos los libros o crear uno nuevo
    # path('api/libro/', views.create_or_update_libro, name='create_or_update_libro'),
    # # URL para obtener, actualizar o eliminar un libro específico
    # path('api/libro/<int:id>/', views.create_or_update_libro, name='get_update_delete_libro'),
    # # URL para eliminar un libro específico
    # path('api/libro/delete/<int:id>/', views.delete_libro, name='delete_libro'),
]
