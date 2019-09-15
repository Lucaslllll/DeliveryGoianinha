# from rest_framework import generics
# from .models import Usuario, Restaurante, Pedido, Pedido_Restaurante, Comentario
# from django.contrib.auth.models import User
# from .serializers import UsuarioSerializer, UserSerializer, RestauranteSerializer, PedidoSerializer, PedidoRestauranteSerializer, ComentarioSerializer
# from rest_framework import permissions
# from .permissions import IsOwnerOrReadOnly


# from rest_framework import renderers
# from rest_framework.response import Response

# class UsuarioHighlight(generics.GenericAPIView):
#     queryset = User.objects.all()
#     renderer_classes = [renderers.StaticHTMLRenderer]

#     def get(self, request, *args, **kwargs):
#         user = self.get_object()
#         return Response(user.highlighted)

# class UsuarioLista(generics.ListCreateAPIView):
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly, IsOwnerOrReadOnly]
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

# class UsuarioDetalhes(generics.RetrieveUpdateDestroyAPIView):
#     permission_classes = [permissions.IsAuthenticatedOrReadOnly]
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

