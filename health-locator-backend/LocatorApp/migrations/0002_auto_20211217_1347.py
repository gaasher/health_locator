# Generated by Django 3.2 on 2021-12-17 18:47

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('LocatorApp', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='location',
            old_name='address',
            new_name='Address',
        ),
        migrations.RenameField(
            model_name='location',
            old_name='date',
            new_name='Date',
        ),
    ]
