document.getElementById('defaultOpen').click()
document.getElementById('togglePanel').addEventListener('click', () => {
	document.getElementById('customPanel').classList.toggle('close-panel')
	document.querySelector('.map-wrapper').classList.remove('change-height')

	const yOffset = -100
		const y =
		document.getElementById('map').getBoundingClientRect().top + window.pageYOffset + yOffset

		window.scrollTo({top: y, behavior: 'smooth'})
})

function openTab(evt, contentName) {
	let i, tabcontent, tablinks
	tabcontent = document.getElementsByClassName('tabcontent')
	for (i = 0; i < tabcontent.length; i++) {
		tabcontent[i].style.display = 'none'
	}
	tablinks = document.getElementsByClassName('tablinks')
	for (i = 0; i < tablinks.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(' active', '')
	}
	document.getElementById(contentName).style.display = 'block'
	evt.currentTarget.className += ' active'
}
