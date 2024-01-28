from . import views
from django.urls import path

urlpatterns = [
    path('', views.home, name='nome'),
    path('login', views.loginuser, name='login'),
    path('logout', views.logoutuser, name='logout'),
    path('create-account', views.create_account, name='create_account'),
    path('admin-signup', views.admin_signup, name='admin_signup'),
    path('teacher-signup', views.teacher_signup, name='teacher_signup'),
    path('student-signup', views.student_signup, name='student_signup'),
]

