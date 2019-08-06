from rest_framework import generics
from .models import Conta, Restaurante, Pedido, Pedido_Restaurante, Comentario
from .serializers import ContaSerializer, RestauranteSerializer, PedidoSerializer, PedidoRestauranteSerializer, ComentarioSerializer

# Create your views here.
class ContaList(generics.ListCreateAPIView):

    queryset = Conta.objects.all()
    serializer_class = ContaSerializer