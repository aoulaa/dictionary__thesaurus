# Generated by Django 3.1.1 on 2021-07-30 07:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0003_auto_20210730_1134'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='learnword',
            name='definition',
        ),
        migrations.RemoveField(
            model_name='learnword',
            name='synonym',
        ),
        migrations.RemoveField(
            model_name='learnword',
            name='type',
        ),
    ]