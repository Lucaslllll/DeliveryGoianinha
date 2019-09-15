from django.conf.urls import url
from rest_framework import routers
from . import api

router = routers.DefaultRouter()
router.register('api/User', api.UserViewSet, 'user')

urlpatterns = router.urls





# urlpatterns = [
# 	url(r'^usuario/(?P<pk>\d+)$/highlight/$', views.UsuarioHighlight.as_view(), name='root'),
#     url(r'^usuario_lista/$', views.UsuarioLista.as_view(), name='usuario_lista'),
#     url(r'^usuario/(?P<pk>\d+)$', views.UsuarioDetalhes.as_view(), name='usuario'),
#     url(r'^$', views.UserViewSet)
# ]