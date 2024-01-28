# Generated by Django 3.2.13 on 2022-08-18 11:02

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AddTeacher',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('first_name', models.CharField(max_length=50)),
                ('last_name', models.CharField(max_length=50)),
                ('email_id', models.CharField(max_length=50)),
                ('DOB', models.CharField(max_length=50)),
                ('mobile_number', models.CharField(max_length=15)),
                ('alternate_number', models.CharField(max_length=50, null=True)),
                ('Email', models.CharField(max_length=50, null=True)),
                ('gender', models.CharField(max_length=50, null=True)),
                ('blood_group', models.CharField(max_length=50, null=True)),
                ('college_name', models.CharField(max_length=50, null=True)),
                ('semester', models.CharField(max_length=50, null=True)),
                ('subject', models.CharField(max_length=50, null=True)),
                ('ccc', models.CharField(max_length=50, null=True)),
                ('address', models.CharField(max_length=150)),
                ('city', models.CharField(max_length=50)),
                ('pin_code', models.CharField(max_length=50)),
                ('state', models.CharField(max_length=50)),
                ('country', models.CharField(max_length=50)),
                ('hobies', models.CharField(max_length=50)),
                ('branch', models.CharField(max_length=50)),
                ('status', models.BooleanField(default=False, verbose_name='Aproved')),
                ('Aaa', models.CharField(max_length=50, null=True)),
                ('Aa', models.CharField(max_length=50, null=True)),
                ('A', models.CharField(max_length=50, null=True)),
                ('BBB', models.CharField(max_length=50, null=True)),
                ('BB', models.CharField(max_length=50, null=True)),
                ('B', models.CharField(max_length=50, null=True)),
            ],
        ),
    ]