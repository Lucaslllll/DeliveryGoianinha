from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import (UserSerializer, UsuarioSerializer, RestauranteSerializer, FotosRestauranteSerializer, 
						 ClassificacaoRestauranteSerializer, ClassificacaoUsuarioSerializer, ComidaSerializer, IngredientesSerializer,
                         CardapioSerializer, PedidoSerializer, PedidoRestauranteSerializer, 
                         ComentarioSerializer)
from .models import (Usuario, Restaurante, Classificacao_Usuario, Classificacao_Restaurante, 
                    Fotos_Comida, Fotos_Restaurante, Ingredientes, Comida, Cardapio,
                    Pedido, Pedido_Restaurante, Comentario)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)

class UsuarioViewSet(viewsets.ModelViewSet):
    queryset = Usuario.objects.all()
    serializer_class = UsuarioSerializer

class RestauranteViewSet(viewsets.ModelViewSet):
    queryset = Restaurante.objects.all()
    serializer_class = RestauranteSerializer

class ClassificacaoRestauranteViewSet(viewsets.ModelViewSet):
    queryset = Classificacao_Restaurante.objects.all()
    serializer_class = ClassificacaoRestauranteSerializer

class ClassificacaoUsuarioViewSet(viewsets.ModelViewSet):
    queryset = Classificacao_Usuario.objects.all()
    serializer_class = ClassificacaoUsuarioSerializer 

class ComidaViewSet(viewsets.ModelViewSet):
    queryset = Comida.objects.all()
    serializer_class = ComidaSerializer

class IngredientesViewSet(viewsets.ModelViewSet):
    queryset = Ingredientes.objects.all()
    serializer_class = IngredientesSerializer

class CardapioViewSet(viewsets.ModelViewSet):
    queryset = Cardapio.objects.all()
    serializer_class = CardapioSerializer

class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer

class PedidoRestauranteViewSet(viewsets.ModelViewSet):
    queryset = Pedido_Restaurante.objects.all()
    serializer_class = PedidoRestauranteSerializer

class ComentarioViewSet(viewsets.ModelViewSet):
    queryset = Comentario.objects.all()
    serializer_class = ComentarioSerializer

