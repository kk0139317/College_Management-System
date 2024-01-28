from . import views
from django.urls import path

urlpatterns = [
    path('', views.index, name='index'),
    path('profile',views.profile, name='profile' ),
    path('branches', views.branches, name='branches'),
    path('teachers', views.teachers, name='teachers'),
    path('students', views.students, name='students'),
    path('add-teacher',views.add_teacher, name='add-teacher'),
    path('add-student',views.add_student, name='add-student'),
]
