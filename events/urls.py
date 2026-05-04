from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, home

router = DefaultRouter()
router.register(r'events', EventViewSet)

urlpatterns = [
    path('', home, name='home'),
    path('api/', include(router.urls)),
]