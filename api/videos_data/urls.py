from django.urls import path

from videos_data.views.videos_data_view import VideosDataView
from videos_data.views.video_comments_view import VideoCommentsView

urlpatterns = [
    path("videos/", VideosDataView.as_view()),
    path('video/<str:video_id>/comments', VideoCommentsView.as_view(), name='video_detail'),
]
