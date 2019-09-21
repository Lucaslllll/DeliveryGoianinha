from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.parsers import MultiPartParser, FormParser
from .serializers import FotosRestauranteSerializer
from .models import Fotos_Restaurante
from cloudinary.templatetags import cloudinary
import cloudinary.uploader


class FotosRestauranteCloud(APIView):
    parser_classes = (MultiPartParser, FormParser,)
    serializer_class = FotosRestauranteSerializer
    def get(self, request, format=None):
        fotos = Fotos_Restaurante.objects.all()
        serializer = FotosRestauranteSerializer(fotos, many=True)
        return Response(data=serializer.data, status=status.HTTP_200_OK)

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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

