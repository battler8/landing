from django.contrib.auth import get_user_model
from django.db import models

from landing.models import GeoPoint

User = get_user_model()


class Organization(models.Model):
    """Организация"""
    name = models.CharField(max_length=100)
    geo_point = models.ForeignKey(GeoPoint, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.name}'


class UserProfile(models.Model):
    """Сотрудник"""
    user = models.OneToOneField(User, on_delete=models.CASCADE)

    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    patronymic = models.CharField(max_length=255, blank=True)

    geo_point = models.ForeignKey(GeoPoint, on_delete=models.CASCADE)
    organization = models.ForeignKey(Organization, on_delete=models.CASCADE, null=True, blank=True)

    def __str__(self):
        return f'{self.last_name} {self.first_name} {self.patronymic}'



