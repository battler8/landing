# Generated by Django 3.2.4 on 2021-06-11 15:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='geopoint',
            name='district',
            field=models.CharField(blank=True, max_length=100),
        ),
    ]
