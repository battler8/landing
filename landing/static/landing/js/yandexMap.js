const organizationsEl = document.querySelector('#organizations-content'),
	profilesEl = document.querySelector('#profiles-content'),
	profQuantity = document.querySelector('#prof-quantity'),
	orgQuantity = document.querySelector('#org-quantity'),
	loader = document.querySelector('.loader'),
	panel = document.getElementById('customPanel')

ymaps.ready(function() {
	var myMap = new ymaps.Map(
		'map',
		{
			center: [53.2, 83.46],
			controls: [],
			zoom: 6
		},
		{
			searchControlProvider: 'yandex#search'
		}
	)
	myMap.controls.add('zoomControl', {
		float: 'none',
		position: {
			right: 10,
			top: 130
		}
	})

	objectManager = new ymaps.ObjectManager({
		clusterize: true
	})

	objectManager.objects.options.set('preset', 'islands#greenDotIcon')
	myMap.geoObjects.add(objectManager)

	loader.style.display = 'block'
	$.ajax({
		url: '/api/geo_point/'
	}).done(function(data) {
		console.log(data)
		loader.style.display = 'none'
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
					`<li class="li-panel"><i class="bi bi-shield-shaded li-icon"></i><a href="/organisation/${o.id}">${o.name}</a></li>`
			)
			.join('')
		profilesEl.innerHTML = profiles
			.map(
				p =>
					`<li class="li-panel"><i class="bi bi-shield-shaded li-icon"></i><a href="/profile/${p.id}">${p.first_name} ${p.last_name} ${p.patronymic}</a></li>`
			)
			.join('')
		profQuantity.innerHTML = profiles.length
		orgQuantity.innerHTML = organizations.length
		document.querySelector('.map-wrapper').classList.add('change-height')
		if (panel.classList.contains('close-panel')) {
			panel.classList.remove('close-panel')
		}

		const yOffset = -100
		const y =
			panel.getBoundingClientRect().top + window.pageYOffset + yOffset

		window.scrollTo({top: y, behavior: 'smooth'})
	}
	objectManager.objects.events.add(['click'], onObjectClick)
})
