# Generated by Django 2.2.4 on 2019-09-22 00:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('Delivery', '0004_auto_20190917_1557'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='comida',
            name='imagem',
        ),
        migrations.RemoveField(
            model_name='restaurante',
            name='fotos',
        ),
        migrations.AddField(
            model_name='fotos_comida',
            name='comida',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Delivery.Comida'),
        ),
        migrations.AddField(
            model_name='fotos_restaurante',
            name='restaurante',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='Delivery.Restaurante'),
        ),
    ]