from django.shortcuts import render
from rest_framework import viewsets
from .models import Event
from .serializers import EventSerializer
# Template View
def home(request):
    return render(request, 'index.html')

# API View
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer