from rest_framework.authtoken.views import obtain_auth_token
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),

    # Contact API
    path('api/contact/', include('contact.urls')),

    # Blog API
    path('api/blog/', include('blog.urls')),

    path('api/login/', obtain_auth_token, name='api-login'),
]
