from crypt import methods
from urllib import request
from django.shortcuts import render, redirect, HttpResponse
from django.contrib.auth import login , authenticate, logout
from django.contrib.auth.models import User
from django.contrib.auth.models import Group


# Create your views here.


def home(request):
    if request.user.is_authenticated:
        l = request.user.groups.values_list('name',flat = True)
        if 'admins' in l:
            return redirect('/adminsite')

        elif 'students' in l:
            return redirect('/students')
        elif 'teachers' in l:
            return redirect('/teachers')
        else:
            return redirect('/')
    else:
        return redirect('/login')

def loginuser(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        user = authenticate(username= username, password=password)
        # user.login()
        if User is not None:
            print('This is ok')
            login(request, user)
            return redirect('/')
        else:
            return redirect('/')
    else:
        if request.user.is_authenticated:
            return redirect('/')
        else:    
            return render(request, 'login.html')

def logoutuser(request):
    logout(request)
    return redirect('/')

def create_account(request):
    if request.user.is_authenticated:
            return redirect('/')
    else:    
        return render(request, 'create-user.html')


def admin_signup(request):
    if request.user.is_authenticated:
            return redirect('/')
    else:    
        return render(request, 'admin-signup.html')

def teacher_signup(request):
    if request.user.is_authenticated:
            return redirect('/')
    else:    
        return render(request, 'teacher-signup.html')

def student_signup(request):
    if request.user.is_authenticated:
            return redirect('/')
    else:    
        return render(request, 'student-signup.html')
