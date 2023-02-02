from django.shortcuts import render
from .models import Word

def index(request):
    query = request.GET.get('q')
    words = Word.objects.filter(english_word__contains=query) | Word.objects.filter(spanish_word__contains=query)
    return render(request, 'dictionary/index.html', {'words': words})

def detail(request, pk):
    word = Word.objects.get(pk=pk)
    return render(request, 'dictionary/detail.html', {'word': word})
