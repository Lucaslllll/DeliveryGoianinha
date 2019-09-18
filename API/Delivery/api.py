from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer, RestauranteSerializer, FotosRestauranteSerializer
from .models import (Usuario, Restaurante, Classificacao_Usuario, Classificacao_Restaurante, 
                    Fotos_Comida, Fotos_Restaurante, Ingredientes, Comida, Cardapio)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permissions_classes = [
        permissions.IsAuthenticated
    ]
    serializer_class = UserSerializer

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class RestauranteViewSet(viewsets.ModelViewSet):
    queryset = Restaurante.objects.all()
    serializer_class = RestauranteSerializer

class FotosRestauranteViewSet(viewsets.ModelViewSet):
    queryset = Fotos_Restaurante.objects.all()
    serializer_class = FotosRestauranteSerializer


