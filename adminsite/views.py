from os import stat
from site import USER_BASE
from sre_parse import State
from tokenize import group
from unicodedata import name
from urllib import request
from django.shortcuts import render, redirect, HttpResponse
from .models import AddStudent, AddTeacher
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

# Create your views here.
def index(request):
    l = request.user.groups.values_list('name',flat = True)
    if 'teachers' in l:
        total_student = AddStudent.objects.count()
        total_teacher = AddTeacher.objects.count()
        ee = {'total_student':total_student, 'total_teacher':total_teacher}
        return render(request, 'adminsite/index.html', ee)
    else:
        return redirect('/') 

def profile(request):
    l = request.user.groups.values_list('name',flat = True)
    if 'admins' in l:
        return render(request, 'adminsite/profile.html')
    else:
        return redirect('/')

def branches(request):
    l = request.user.groups.values_list('name',flat = True)
    if 'admins' in l:
        return render(request, 'adminsite/branches.html')
    else:
        return redirect('/')

def teachers(request):
    l = request.user.groups.values_list('name',flat = True)
    if 'admins' in l:
        teacher_list = AddTeacher.objects.all()
        teacher_list = {'teacher_list':teacher_list}
        return render(request, 'adminsite/teachers.html', teacher_list)
    else:
        return redirect('/')

def add_teacher(request):
    l = request.user.groups.values_list('name',flat = True)
    if 'admins' in l:
        if request.method == 'POST':
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            email_id = request.POST.get('email_id')
            mobile_number = request.POST.get('mobile_number')
            dob = request.POST.get('dob')
            branch = request.POST.get('branch')
            subject = request.POST.get('subject')
            gender = request.POST.get('gender')
            address = request.POST.get('address')
            city = request.POST.get('city')
            hobies = request.POST.get('hobby')
            pin_code = request.POST.get('pin_code')
            state = request.POST.get('state')
            country = request.POST.get('country')
            # dob = request.POST.get('dob')
            # hostel = request.POST.get('hostel')
            # floor = request.POST.get('floor')
            # room_number = request.POST.get('room_number')

            
            teacherdetail = AddTeacher(first_name=first_name, last_name=last_name,
                                     email_id=email_id, mobile_number=mobile_number,
                                     DOB=dob, branch=branch, subject=subject,
                                     gender=gender, address=address, city=city,
                                     hobies=hobies, pin_code=pin_code,
                                     state=state, country=country )
        
            teacherdetail.save()
            user = User.objects.create_user(email_id, email_id, dob)
            my_group = Group.objects.get(name='teachers') 
            my_group.user_set.add(user)
            user.save()
            return redirect('/adminsite')
        else:
            return render(request,'adminsite/addteachers.html')
    else:
        return redirect('/')


def students(request):
    l = request.user.groups.values_list('name',flat = True)
    if 'admins' in l:
        student_list = AddStudent.objects.all()
        student_list = {'student_list':student_list}
        return render(request, 'adminsite/studentlist.html', student_list)
    else:
        return redirect('/')


def add_student(request):
    l = request.user.groups.values_list('name',flat = True)
    if 'admins' in l:
        if request.method == 'POST':
            first_name = request.POST.get('first_name')
            last_name = request.POST.get('last_name')
            roll_number = request.POST.get('roll_number')
            email_id = request.POST.get('email_id')
            mobile_number = request.POST.get('mobile_number')
            dob = request.POST.get('dob')
            branch = request.POST.get('branch')
            semester = request.POST.get('semester')
            gender = request.POST.get('gender')
            address = request.POST.get('address')
            city = request.POST.get('city')
            hobies = request.POST.get('hobby')
            pin_code = request.POST.get('pin_code')
            state = request.POST.get('state')
            country = request.POST.get('country')
            password = request.POST.get('password')
            # dob = request.POST.get('dob')
            # hostel = request.POST.get('hostel')
            # floor = request.POST.get('floor')
            # room_number = request.POST.get('room_number')

            
            studentdetail = AddStudent(first_name=first_name, roll_number=roll_number,
                                     last_name=last_name, password=password,
                                     email_id=email_id, mobile_number=mobile_number,
                                     DOB=dob, branch=branch, semester=semester,
                                     gender=gender, address=address, city=city,
                                     hobies=hobies, pin_code=pin_code,
                                     state=state, country=country )
        
            studentdetail.save()
            user = User.objects.create_user(roll_number, email_id, password)
            my_group = Group.objects.get(name='students') 
            my_group.user_set.add(user)
            my_group = Group.objects.get(name=branch) 
            my_group.user_set.add(user)
            user.save()
            return redirect('/adminsite')
        else:
            return render(request,'adminsite/add-student.html')
    else:
        return redirect('/')