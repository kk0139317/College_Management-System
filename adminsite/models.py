from pyexpat import model
from re import M
from statistics import mode
from telnetlib import STATUS
from tkinter import N
from urllib import request
from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class AddTeacher(models.Model):
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email_id = models.CharField(max_length=50)
    DOB = models.CharField(max_length=50)
    mobile_number = models.CharField(max_length=15)
    alternate_number = models.CharField(max_length=50, null=True)
    Email = models.CharField(max_length=50, null=True)
    gender = models.CharField(max_length=50,null=True)
    blood_group = models.CharField(max_length=50, null=True)
    college_name = models.CharField(max_length=50, null=True)
    semester = models.CharField(max_length=50, null=True)
    subject = models.CharField(max_length=50, null=True)
    ccc = models.CharField(max_length=50, null=True)
    address = models.CharField(max_length=150, null=False)
    city = models.CharField(max_length=50, null=False)
    pin_code = models.CharField(max_length=50)
    state = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    hobies = models.CharField(max_length=50)
    branch = models.CharField(max_length=50)
    status = models.BooleanField('Aproved', default=False)
    Aaa = models.CharField(max_length=50, null=True)
    Aa = models.CharField(max_length=50, null=True)
    A = models.CharField(max_length=50, null=True)
    BBB = models.CharField(max_length=50, null=True)
    BB = models.CharField(max_length=50, null=True)
    B = models.CharField(max_length=50, null=True)    
    
    def __str__(self):
        return self.first_name + ',' + self.email_id
    


class AddStudent(models.Model):
    roll_number = models.CharField(max_length=20)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email_id = models.CharField(max_length=50)
    mobile_number = models.CharField(max_length=15)
    alternate_number = models.CharField(max_length=50, null=True)
    DOB = models.CharField(max_length=50)
    gender = models.CharField(max_length=50,null=True)
    blood_group = models.CharField(max_length=50, null=True)
    college_name = models.CharField(max_length=50, null=True)
    semester = models.CharField(max_length=50, null=True)
    branch = models.CharField(max_length=50)
    address = models.CharField(max_length=150, null=False)
    city = models.CharField(max_length=50, null=False)
    state = models.CharField(max_length=50)
    pin_code = models.CharField(max_length=50)
    country = models.CharField(max_length=50)
    hobies = models.CharField(max_length=50)
    status = models.BooleanField('Aproved', default=False)
    password = models.CharField(max_length=50)
    subject = models.CharField(max_length=50, null=True)
    ccc = models.CharField(max_length=50, null=True)
    Email = models.CharField(max_length=50, null=True)
    Aaa = models.CharField(max_length=50, null=True)
    Aa = models.CharField(max_length=50, null=True)
    A = models.CharField(max_length=50, null=True)
    BBB = models.CharField(max_length=50, null=True)
    BB = models.CharField(max_length=50, null=True)
    B = models.CharField(max_length=50, null=True)    
    
    def __str__(self):
        return self.first_name + ',' + self.email_id
    