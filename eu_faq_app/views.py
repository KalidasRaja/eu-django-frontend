from django.shortcuts import render


def faq(request):
    return render(request, 'base-faq.html')
