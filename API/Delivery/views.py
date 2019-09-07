from rest_framework import generics
from .models import Usuario, Restaurante, Pedido, Pedido_Restaurante, Comentario
from .serializers import UsuarioSerializer, RestauranteSerializer, PedidoSerializer, PedidoRestauranteSerializer, ComentarioSerializer

# Create your views here.
class UsuarioLista(generics.ListCreateAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class UsuarioDetalhes(generics.RetrieveUpdateDestroyAPIView):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer
