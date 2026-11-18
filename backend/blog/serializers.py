
from rest_framework import serializers
from .models import BlogPost


class BlogPostSerializer(serializers.ModelSerializer):
    class Meta:
        model = BlogPost
        fields = [
            'id',
            'title',
            'slug',
            'excerpt',
            'content',
            'published_at',
            'updated_at',
            'is_published',
        ]
        read_only_fields = ['id', 'published_at', 'updated_at']
