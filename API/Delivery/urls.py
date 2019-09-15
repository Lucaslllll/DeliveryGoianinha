from django.conf.urls import url
from rest_framework import routers
from . import api

router = routers.DefaultRouter()
router.register('api/User', api.UserViewSet, 'user')

urlpatterns = router.urls
