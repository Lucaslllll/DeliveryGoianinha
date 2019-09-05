from rest_framework import serializers
from .models import Usuario, Restaurante, Pedido, Pedido_Restaurante, Comentario


class UsuarioSerializer(serializers.ModelSerializer):
	class Meta:
		model = Usuario
		fields = '__all__'

class RestauranteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Restaurante
		fields = '__all__'

class PedidoSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pedido
		fields = '__all__'

class PedidoRestauranteSerializer(serializers.ModelSerializer):
	class Meta:
		model = Pedido_Restaurante
		fields = '__all__'

class ComentarioSerializer(serializers.ModelSerializer):
	class Meta:
		model = Comentario
		fields = '__all__'