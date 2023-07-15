from django.urls import path
from .views import libroview
from .views import registrouser
#from .views import guardar_libro
# from .views import borrar_libro
# from .views import editar_libro


urlpatterns = [
    ####de mas link del proyecto###
    path("libro/", libroview.as_view(), name="libro"),
    # path("libro/<int:id>", libroview.as_view(), name="librosId"),
    path("user/", registrouser.as_view(), name="user"),
    # path("user/<int:id>", registrouser.as_view(), name="userId"),
    
####################################################################
#link de agregar libros 

    #path('libros/', guardar_libro.as_view(), name='guardar_libro'),
    # path('libros/<int:libro_id>/', editar_libro.as_view(), name='editar_libro'),
    # path('libros/<int:libro_id>/', borrar_libro.as_view(), name='borrar_libro'),
####################################################################
#Link de Agregar usuarios   

]
