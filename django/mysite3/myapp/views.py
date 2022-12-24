from django.shortcuts import render
from django.contrib.auth import login, authenticate
from .forms import RegisterForm

def register(request):
    return render(request, "home.html")

def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect("/home")
    else:
        form = RegisterForm()

    return render(request, "register.html", {"form": form})