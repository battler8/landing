from django.urls import path

from landing.views import *

app_name = "landing"

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('organisation/<int:id>', OrganizationDetail.as_view(), name='organisation_detail'),
    path('profile/<int:id>', UserProfileDetail.as_view(), name='profile_detail'),
    path('api/geo_point/', GeoPointView.as_view()),
    path('api/geo_point1/', GeoPointAPIView.as_view()),
]
