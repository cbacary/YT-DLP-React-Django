# Generated by Django 4.0.1 on 2022-02-01 22:40

from django.db import migrations


def create_data(apps, schema_editor):
    YTDl = apps.get_model("ytdl", "YTDl")
    YTDl(url="https://www.youtube.com/watch?v=dQw4w9WgXcQ")


class Migration(migrations.Migration):

    dependencies = [
        ('ytdl', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]