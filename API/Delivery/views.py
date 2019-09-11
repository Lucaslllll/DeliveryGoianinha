from rest_framework import generics
from .models import Usuario, Restaurante, Pedido, Pedido_Restaurante, Comentario
from django.contrib.auth.models import User
from .serializers import UsuarioSerializer, UserSerializer, RestauranteSerializer, PedidoSerializer, PedidoRestauranteSerializer, ComentarioSerializer

# Create your views here.
class UsuarioLista(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UsuarioDetalhes(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

