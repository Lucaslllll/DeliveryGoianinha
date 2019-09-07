from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^usuario_lista/$', views.UsuarioLista.as_view(), name='usuario_lista'),
    url(r'^usuario/(?P<pk>\d+)$', views.UsuarioDetalhes.as_view(), name='usuario'),
]