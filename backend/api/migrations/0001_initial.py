# Generated by Django 4.1.6 on 2023-07-20 00:18

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Blog",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("body", models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name="devolucion",
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
            name="incioseccion",
            fields=[
                ("idinicio", models.AutoField(primary_key=True, serialize=False)),
                ("usuario", models.CharField(max_length=50)),
                ("password", models.CharField(max_length=50)),
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
                ("codigo", models.CharField(max_length=150)),
                ("cantidad", models.IntegerField()),
                ("nombreLibro", models.CharField(max_length=150)),
                ("autor", models.CharField(max_length=100)),
                ("descripcion", models.TextField()),
                ("carrera", models.CharField(max_length=100)),
                (
                    "imagen",
                    models.ImageField(blank=True, null=True, upload_to="libros/"),
                ),
            ],
            options={
                "verbose_name": "Registro de Libros",
                "db_table": "Libros",
            },
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
                ("idregistrouser", models.AutoField(primary_key=True, serialize=False)),
                ("matricula", models.CharField(max_length=15)),
                ("nombrealumno", models.CharField(max_length=100)),
                ("apellidoP", models.CharField(max_length=50)),
                ("apellidoM", models.CharField(max_length=50)),
                ("correo", models.EmailField(max_length=254)),
                ("telefono", models.CharField(max_length=20)),
                ("edad", models.IntegerField(blank=True)),
                ("carrera", models.CharField(max_length=100)),
                ("genero", models.CharField(max_length=100)),
                ("user", models.CharField(max_length=50)),
                ("password", models.CharField(max_length=50)),
            ],
            options={
                "verbose_name": "Registro de usuarios",
                "db_table": "Registro_user",
            },
        ),
        migrations.CreateModel(
            name="responsablebibli",
            fields=[
                ("id_responsable", models.AutoField(primary_key=True, serialize=False)),
                ("nombreresponsable", models.CharField(max_length=100)),
            ],
        ),
    ]
