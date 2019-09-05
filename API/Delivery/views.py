from rest_framework import generics
from .models import Usuario, Restaurante, Pedido, Pedido_Restaurante, Comentario
from .serializers import UsuarioSerializer, RestauranteSerializer, PedidoSerializer, PedidoRestauranteSerializer, ComentarioSerializer

# Create your views here.
class ContaList(generics.ListCreateAPIView):

    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer