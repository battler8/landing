from accounts.models import Organization, UserProfile
from landing.models import GeoPoint


def get_geo_points() -> list:
    """Список geo меток с вложенными данными об организации и сотрудникок"""

    geo_points = GeoPoint.objects.all()
    points = []
    for point in geo_points:

        organizations = Organization.objects.filter(geo_point=point)
        organization_list = []
        for organization in organizations:
            organization_list.append({'id': organization.id,
                                      'name': organization.name})

        profiles = UserProfile.objects.filter(geo_point=point)
        profile_list = []
        for profile in profiles:
            try:
                profile_list.append({'id': profile.id,
                                     'first_name': profile.first_name,
                                     'last_name': profile.last_name,
                                     'patronymic': profile.patronymic,
                                     'organization': profile.organization.name})
            except:
                profile_list.append({'id': profile.id,
                                     'first_name': profile.first_name,
                                     'last_name': profile.last_name,
                                     'patronymic': profile.patronymic,
                                     'organization': ""})
        geometry = {'type': 'Point', 'coordinates': [point.latitude, point.longitude]}
        options = {'preset': 'islands#redCircleIcon'}
        data = {'organizations': organization_list,'profile_list': profile_list}

        quantity = len(profile_list) + len(organization_list)

        points.append({'type':  'Feature', 'id': point.id, 'geometry': geometry,
                       'properties': {'data': data, 'iconContent': quantity}, 'options': options})

    return points
