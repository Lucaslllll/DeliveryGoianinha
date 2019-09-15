from django.contrib.auth.models import User
from rest_framework import viewsets, permissions
from .serializers import UserSerializer

class UserViewSet(viewsets.ModelViewSet):
	queryset = User.objects.all()
	permissions_classes = [
		permissions.IsAuthenticated
	]
	serializer_class = UserSerializer

	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)
