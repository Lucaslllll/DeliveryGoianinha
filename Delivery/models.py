from django.db import models
from django.contrib.auth.models import User
from internationalphone.models import InternationalPhoneNumberField


class Conta(models.Model):
	usuario = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True)
	cpf = models.NumberField(max_length=11, help_text="Digite seu CPF sem  qualquer ponto ou hífen")
	localizacao = models.CharField(max_length=500)
	telefone = models.InternationalPhoneNumberField(default_region='BR')



class Restaurante(models.Model):
	nome = models.CharField(max_length=500)
	dono = models.CharField(max_length=500)
	localizacao = models.CharField(max_length=500)
	telefone = models.CharField()


class Comentario(models.Model):
	autor = models.OneToOneField(Conta, on_delete=models.CASCADE, blank=True, null=True)
	titulo = models.CharField(max_length=100)
	descricao = models.CharField(max_length=1000)
