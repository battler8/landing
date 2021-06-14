const organizationsEl = document.querySelector('#organizations'),
	profilesEl = document.querySelector('#profiles'),
	profQuantity = document.querySelector('#prof-quantity'),
	orgQuantity = document.querySelector('#org-quantity'),
	loader = document.querySelector('.panel-loader'),
	panel = document.getElementById('customPanel')

ymaps.ready(function() {
	var myMap = new ymaps.Map(
		'map',
		{
			center: [53.2, 83.46],
			zoom: 10,
			controls: []
		},
		{
			searchControlProvider: 'yandex#search'
		}
	)

	objectManager = new ymaps.ObjectManager({
		clusterize: false,
		gridSize: 32,
		clusterDisableClickZoom: true,
		hasBalloon: false
	})

	objectManager.objects.options.set('preset', 'islands#greenDotIcon')
	myMap.geoObjects.add(objectManager)

	loader.style.display = 'block'
	$.ajax({
		url: '/api/geo_point/'
	}).done(function(data) {
		loader.style.display = 'none'
		loader.style.display = 'none'
		organizationsEl.innerHTML = `<p>Выберите город...</p>`
		profilesEl.innerHTML = `<p>Выберите город...</p>`
		objectManager.add(data)
	})

	function onObjectClick(e) {
		var objectId = e.get('objectId'),
			object = objectManager.objects.getById(objectId)
		const organizations = object.properties.data.organizations,
			profiles = object.properties.data.profile_list
		organizationsEl.innerHTML = organizations
			.map(
				o =>
					`<li class="li-panel"><a href="/organisation/${o.id}">${o.name}</a></li>`
			)
			.join('')
		profilesEl.innerHTML = profiles
			.map(
				p =>
					`<li class="li-panel"><a href="/profile/${p.id}">${p.first_name} ${p.last_name} ${p.patronymic}</a></li>`
			)
			.join('')
		profQuantity.innerHTML = profiles.length
		orgQuantity.innerHTML = organizations.length

		if (panel.classList.contains('close-panel')) {
			panel.classList.remove('close-panel')
			if (
				document.getElementById('toggle-icon').className ==
				'bi bi-caret-left'
			) {
				document.getElementById('toggle-icon').className =
					'bi bi-caret-right'
			} else {
				document.getElementById('toggle-icon').className =
					'bi bi-caret-left'
			}
		}
	}
	objectManager.objects.events.add(['click'], onObjectClick)
})
