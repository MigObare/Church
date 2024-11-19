from django.db import models

# Create your models here.
class Contact(models.Model):
    fname = models.CharField(max_length=20, blank=False)
    lname = models.CharField(max_length=20, blank=False)
    phone = models.IntegerField()
    email = models.EmailField()
    message = models.TextField(max_length=300)  

    def __str__(self):
      return self.fname