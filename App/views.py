from django.shortcuts import render,redirect
from django.http import HttpResponse
from django.contrib import messages
from .models import Contact

# Create your views here.

def index(request):
    return render(request, 'index.html')


def about(request):
    return render(request, 'about.html')  


def contact(request):
    if request.method == 'POST':
        fname = request.POST.get('fname')
        lname = request.POST.get('lname')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        message = request.POST.get('message')

        data = Contact(fname = fname, lname = lname, phone = phone, email = email, message = message,)
        data.save()
        messages.success(request, 'Message sent successfully')
        return redirect('/contact')

    return render(request, 'contact.html')


def academy(request):
    return render(request, 'academy.html') 


def event(request):
    return render(request, 'event.html')    