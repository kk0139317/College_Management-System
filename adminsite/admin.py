from django.contrib import admin
from .models import AddStudent, AddTeacher

# Register your models here.

admin.site.register(AddTeacher),
admin.site.register(AddStudent),