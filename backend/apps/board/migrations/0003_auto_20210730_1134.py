# Generated by Django 3.1.1 on 2021-07-30 06:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('board', '0002_auto_20210730_1108'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='learnword',
            name='synonym',
        ),
        migrations.AddField(
            model_name='learnword',
            name='synonym',
            field=models.CharField(default=123423, max_length=255),
            preserve_default=False,
        ),
        migrations.DeleteModel(
            name='Synonym',
        ),
    ]