# Generated by Django 4.1.6 on 2023-03-21 03:45

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="libro",
            name="imagen",
            field=models.ImageField(blank=True, null=True, upload_to="libros/"),
        ),
    ]
