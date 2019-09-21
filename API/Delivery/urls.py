from django.conf.urls import url
from rest_framework import routers
from . import api, views

router = routers.DefaultRouter()
router.register('api/user', api.UserViewSet, 'user')
router.register('api/restaurante', api.RestauranteViewSet, 'restaurante')


urlpatterns = router.urls


urlpatterns += [
	url(r'^api/foto_restaurante', views.FotosRestauranteCloud.as_view(), name='foto_restaurante'),	

]