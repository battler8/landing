from django.db import models


class GeoPoint(models.Model):
    """Гео Точка"""
    name = models.CharField(max_length=100)
    district = models.CharField(max_length=100, blank=True)
    latitude = models.FloatField()
    longitude = models.FloatField()

    def __str__(self):
        return f'{self.name} {self.district}'