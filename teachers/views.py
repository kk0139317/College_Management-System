from crypt import methods
from urllib import request
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import login , authenticate, logout
from django.contrib.auth.models import User
from django.contrib.auth.models import Group



def index(request):
    return render(request, 'teachers/index.html')