from django.conf.urls import url
from rest_framework import routers
from . import api

router = routers.DefaultRouter()
router.register('api/user', api.UserViewSet, 'user')
router.register('api/restaurante', api.RestauranteViewSet, 'restaurante')
router.register('api/foto_restaurante', api.FotosRestauranteViewSet, 'foto_restaurante')


urlpatterns = router.urls
