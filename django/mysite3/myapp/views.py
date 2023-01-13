from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from .forms import RegisterForm
from .models import Post
from django.contrib.auth.decorators import login_required

def home(request):
    posts = Post.objects.all()
    return render(request, "home.html", {"posts": posts})

def register(request):
    if request.method == "POST":
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
        return redirect("/")
    else:
        form = RegisterForm()
    return render(request, "register.html", {"form": form})

@login_required(login_url="/login/")
def create_post(request):
    if request.method == "GET" and request.user.is_authenticated:
        return render(request, "create_post.html")

    post = Post(title = request.POST["title"], body = request.POST["body"], user_id = request.user.id)
    post.save()
    return redirect("/")


@login_required(login_url="/login/")
def post_details(request, post_id):
    post = Post.objects.all().get(id=post_id)
    return render(request, "post.html", {"post": post})
