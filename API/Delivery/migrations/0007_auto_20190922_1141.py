# Generated by Django 2.2.4 on 2019-09-22 14:41

import cloudinary.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Delivery', '0006_auto_20190921_2146'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comentario',
            name='autor',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Delivery.Usuario'),
        ),
        migrations.AlterField(
            model_name='fotos_comida',
            name='foto',
            field=cloudinary.models.CloudinaryField(max_length=255, null=True, verbose_name='foto'),
        ),
        migrations.AlterField(
            model_name='fotos_restaurante',
            name='foto',
            field=cloudinary.models.CloudinaryField(max_length=255, null=True, verbose_name='foto'),
        ),
        migrations.AlterField(
            model_name='pedido_restaurante',
            name='cliente',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Delivery.Usuario'),
        ),
    ]
