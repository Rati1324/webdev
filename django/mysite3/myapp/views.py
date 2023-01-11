from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import RegisterForm
from .models import Post

def home(request):
    return render(request, "home.html")

def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect("/")
    else:
        form = RegisterForm()
    return render(request, "register.html", {"form": form})

def create_post(request):
    if request.method == "GET":
        return render(request, "create_post.html")

    post = Post(title = request.POST["title"], body = request.POST["body"], user_id = request.user.id)
    post.save()
    return redirect("/")