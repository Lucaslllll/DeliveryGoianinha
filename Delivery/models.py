from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField



class Conta(models.Model):
	usuario = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
	cpf = models.CharField(max_length=11, help_text="Digite seu CPF sem  qualquer ponto ou hífen")
	localizacao = models.CharField(max_length=500)
	telefone = PhoneNumberField()


class Restaurante(models.Model):
	nome = models.CharField(max_length=500)
	dono = models.CharField(max_length=500)
	localizacao = models.CharField(max_length=500)
	telefone = PhoneNumberField()


class Pedido(models.Model):
	nome = models.CharField(max_length=500)
	unidades = models.IntegerField()
	entrega = models.DateTimeField()


class Pedido_Restaurante(models.Model):
	cliente = models.OneToOneField(Conta, on_delete=models.CASCADE)
	pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
	restaurante = models.ForeignKey(Restaurante, on_delete=models.CASCADE)
	

class Comentario(models.Model):
	autor = models.OneToOneField(Conta, on_delete=models.CASCADE, blank=True, null=True)
	titulo = models.CharField(max_length=100)
	descricao = models.CharField(max_length=1000)
