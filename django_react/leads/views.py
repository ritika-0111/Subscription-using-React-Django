from .models import Detail
from .serializers import LeadSerializer
from rest_framework import generics
from django.views import generic
from django.views.generic.edit import CreateView

class LeadListCreate(generics.ListCreateAPIView):
    queryset = Detail.objects.all()
    serializer_class = LeadSerializer
