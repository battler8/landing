from rest_framework import serializers


class GeoPointSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    district = serializers.CharField(max_length=100, allow_blank=True)
    latitude = serializers.FloatField()
    longitude  = serializers.FloatField()