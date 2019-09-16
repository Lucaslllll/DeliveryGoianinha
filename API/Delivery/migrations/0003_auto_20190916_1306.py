# Generated by Django 2.2.1 on 2019-09-16 16:06

import Delivery.models
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Delivery', '0002_auto_20190904_1136'),
    ]

    operations = [
        migrations.AddField(
            model_name='restaurante',
            name='fotos',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Delivery.Fotos_Restaurante'),
        ),
        migrations.AlterField(
            model_name='fotos_comida',
            name='foto',
            field=models.ImageField(null=True, upload_to=Delivery.models.get_path_comida),
        ),
        migrations.AlterField(
            model_name='fotos_restaurante',
            name='foto',
            field=models.ImageField(null=True, upload_to=Delivery.models.get_path_restaurante),
        ),
    ]
