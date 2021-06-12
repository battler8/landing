# Landing Организаций

## Auth SuperUser
`admin:1`

## Start Project
`python3 -m venv env`<br/><br/>
`source env/bin/activate`<br/><br/>
`pip install -r requirements.txt`<br/><br/>
`python manage.py runserver`

## API for Map
`GET api/geo_point/` вернёт информацию о точках с организациями и сотрудниками
### Ответ
Успешный ответ приходит с кодом `200 OK` и содержит тело:

```json

{
  "geo_points": [
    {
      "id": 1,
      "name": "Барнаул",
      "district": "",
      "latitude": 53.346785,
      "longitude": 83.776856,
      "organizations": [
        {
          "id": 1,
          "name": "Наименование Организации Барнаул 1"
        },
        {
          "id": 2,
          "name": "Наименование Организации Барнаул 2"
        },
      ],
      "profile_list": [
        {
          "id": 1,
          "first_name": "Натан",
          "last_name": "Маслов",
          "patronymic": "Митрофанович",
          "organization": ""
        },
        {
          "id": 2,
          "first_name": "Вадим",
          "last_name": "Ситников",
          "patronymic": "Наумович",
          "organization": "Наименование Организации Барнаул 1"
        },
      ]
    },
  ]
}
```

## Просмотр подробной информации об организации
`GET http://127.0.0.1:8000/organisation/:id`

## Просмотр подробной информации о пользователе
`GET http://127.0.0.1:8000/profile/:id`