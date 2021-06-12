from django.http import JsonResponse
from django.shortcuts import render
from django.views.generic import View
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import Organization, UserProfile
from landing.models import GeoPoint
from landing.serializers import GeoPointSerializer
from landing.services import get_geo_points


class IndexView(View):
    """ Главная страница """

    def get(self, request):
        return render(request, "landing/index.html", {})


class GeoPointView(View):
    """Temporary API для карты"""

    def get(self, request):
        geo_points = get_geo_points()
        return JsonResponse({"geo_points": geo_points}, status=200, safe=False)


class OrganizationDetail(View):
    def get(self, request, id):
        organization = Organization.objects.get(id=id)
        return render(request, "landing/organization-detail.html",
                      {'organization': organization})


class UserProfileDetail(View):
    def get(self, request, id):
        profile = UserProfile.objects.get(id=id)
        return render(request, "landing/profile_detail.html",
                      {'profile': profile})


class GeoPointAPIView(APIView):
    """API для карты"""
    # todo надо сделать на Django Rest
    def get(self, request):
        geo_points = GeoPoint.objects.all()
        serializer = GeoPointSerializer(geo_points, many=True)
        return Response({"geo_points": serializer.data})



