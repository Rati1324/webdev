from django.db import models

class Department(models.Model):
    DepartmentId = models.AutoField(primary_key=True)
    DepartmentName = models.CharField(max_length=100)

class Employee(models.Model):
    EmployeeId = models.AutoField(primary_key=True)
    EmployeeName = models.CharField(max_length=100)
    # we are not really using foreign key for now cuz it needs
    # some stuff with serializing
    Department = models.CharField(max_length=100)
    DateOfJoining = models.DateField()
    