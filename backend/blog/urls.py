
from django.urls import path
from .views import (
    PublicBlogListView,
    PublicBlogDetailView,
    AdminBlogListCreateView,
    AdminBlogDetailView,
)

urlpatterns = [
    path('', PublicBlogListView.as_view(), name='public-blog-list'),
    path('<slug:slug>/', PublicBlogDetailView.as_view(), name='public-blog-detail'),

    path('admin/manage/', AdminBlogListCreateView.as_view(), name='admin-blog-list-create'),
    path('admin/manage/<int:pk>/', AdminBlogDetailView.as_view(), name='admin-blog-detail'),
]
