# Generated by Django 4.1.6 on 2023-02-14 05:52

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("api", "0001_initial"),
    ]

    operations = [
        migrations.CreateModel(
            name="devoluciones",
            fields=[
                (
                    "id_devoluciones",
                    models.AutoField(primary_key=True, serialize=False),
                ),
                ("nombrelibro", models.CharField(max_length=150)),
                ("fecha", models.DateField()),
                ("acta", models.CharField(max_length=150)),
                ("detalle", models.TextField()),
                ("nombre_da", models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name="inventario",
            fields=[
                ("id_inventario", models.AutoField(primary_key=True, serialize=False)),
                ("titulo", models.CharField(max_length=150)),
                ("autor", models.CharField(max_length=100)),
                ("area", models.CharField(max_length=150)),
                ("detalle", models.CharField(max_length=150)),
                ("cantidad_po", models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name="libro",
            fields=[
                ("id_libro", models.AutoField(primary_key=True, serialize=False)),
                ("nombrelibro", models.CharField(max_length=150)),
                ("actor", models.CharField(max_length=100)),
                ("descripcion", models.TextField()),
                ("imagen", models.ImageField(upload_to="")),
            ],
        ),
        migrations.CreateModel(
            name="prestamo",
            fields=[
                ("id_prestamo", models.IntegerField(primary_key=True, serialize=False)),
                ("detalle", models.CharField(max_length=150)),
                ("nombrealumno", models.CharField(max_length=150)),
                ("actor", models.CharField(max_length=150)),
                ("fecha", models.DateField()),
                ("n_libro", models.CharField(max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name="registrousuario",
            fields=[
                ("matricula", models.AutoField(primary_key=True, serialize=False)),
                ("nombrealumno", models.CharField(max_length=100)),
                ("edad", models.CharField(max_length=50)),
                ("carrera", models.TextField(max_length=100)),
                ("correo", models.EmailField(max_length=254)),
            ],
        ),
        migrations.CreateModel(
            name="responsablebibli",
            fields=[
                ("id_responsable", models.AutoField(primary_key=True, serialize=False)),
                ("nombreresponsable", models.CharField(max_length=100)),
            ],
        ),
    ]