from django.shortcuts import render, reverse
from django.views import generic
from django.views.generic.edit import CreateView
from leads.models import Detail


def index(request):
    return render(request, 'frontend/index.html')

def subscribe(request):
    return render(request, 'frontend/form.html')

class Entry(CreateView):
    model = Detail
    # the fields mentioned below become the entry rows in the generated form
    fields = '__all__'
    def get_success_url(self):
        return reverse('subscribe')

