from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^conta/$', views.ContaList.as_view(), name='conta-list'),

]