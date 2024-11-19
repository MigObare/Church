
from django.urls import path
from.import views 

app_name = 'app'
urlpatterns = [
    path('', views.index, name='index'),
    path('about', views.about, name='about'),
    path('contact', views.contact, name='contact'),
    path('academy',views.academy, name='academy'),
    path('event', views.event, name='event'),
]