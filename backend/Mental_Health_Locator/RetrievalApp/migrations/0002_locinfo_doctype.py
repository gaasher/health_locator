# Generated by Django 3.2 on 2021-12-29 03:49

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('RetrievalApp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='locinfo',
            name='DocType',
            field=models.CharField(default='n/a', max_length=200),
            preserve_default=False,
        ),
    ]