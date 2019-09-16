from django.db import models
from django.contrib.auth.models import User
from phonenumber_field.modelfields import PhoneNumberField
import os




def get_path_restaurante(self, instance, filename):
    return os.path.join('Fotos/Restaurantes', str(instance.id), filename)
def get_path_comida(self, instance, filename):
    return os.path.join('Fotos/Comida', str(instance.id), filename)



class Classificacao_Usuario(models.Model):
    nota = models.IntegerField();
class Classificacao_Restaurante(models.Model):
    nota = models.IntegerField();


class Fotos_Restaurante(models.Model):
    foto = models.ImageField(upload_to=get_path_restaurante, null=True);
class Fotos_Comida(models.Model):
    foto = models.ImageField(upload_to=get_path_comida, null=True);



class Usuario(models.Model):    
    user = models.OneToOneField(User, on_delete=models.CASCADE, blank=True, null=True);
    localizacao = models.CharField(max_length=500);
    classificacao = models.ForeignKey(Classificacao_Usuario, on_delete=models.CASCADE, blank=True, null=True);


class Ingredientes(models.Model):
    nome = models.CharField(max_length=120);

class Comida(models.Model):
    nome = models.CharField(max_length=120);
    ingredientes = models.ForeignKey(Ingredientes, on_delete=models.CASCADE, blank=True, null=True);
    preço = models.DecimalField(max_digits=6, decimal_places=2);
    imagem = models.ForeignKey(Fotos_Comida, on_delete=models.CASCADE, blank=True, null=True);

class Cardapio(models.Model):
    comidas = models.ForeignKey(Comida, on_delete=models.CASCADE, blank=True, null=True);



class Restaurante(models.Model):
    nome = models.CharField(max_length=500)
    cnpj = models.IntegerField(null=True);
    email = models.EmailField(null=True);
    classificacao = models.ForeignKey(Classificacao_Restaurante, on_delete=models.CASCADE, blank=True, null=True);
    localizacao = models.CharField(max_length=1000)
    descricao_breve = models.CharField(max_length=100, null=True);
    descricao_longa = models.CharField(max_length=500, null=True);
    status = models.BooleanField(default=True, null=True);
    telefone = PhoneNumberField(region='BR')
    fotos = models.ForeignKey(Fotos_Restaurante, on_delete=models.CASCADE, blank=True, null=True)
    cardapio = models.OneToOneField(Cardapio, on_delete=models.CASCADE, blank=True, null=True)
    

class Pedido(models.Model):
    nome = models.CharField(max_length=500)
    unidades = models.IntegerField()
    entrega = models.DateTimeField()


class Pedido_Restaurante(models.Model):
    cliente = models.OneToOneField(Usuario, on_delete=models.CASCADE)
    pedido = models.ForeignKey(Pedido, on_delete=models.CASCADE)
    restaurante = models.ForeignKey(Restaurante, on_delete=models.CASCADE)
    

class Comentario(models.Model):
    autor = models.OneToOneField(Usuario, on_delete=models.CASCADE, blank=True, null=True)
    titulo = models.CharField(max_length=100)
    descricao = models.CharField(max_length=1000)







