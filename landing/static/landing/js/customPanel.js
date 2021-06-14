document.getElementById('defaultOpen').click()

function closeMenu() {
	document.getElementById('customPanel').style.display = 'none'
}
function openMenu() {
	document.getElementById('customPanel').style.display = 'block'
}
document.getElementById('togglePanel').addEventListener('click', () => {
	document.getElementById('customPanel').classList.toggle('close-panel')
	if (
		document.getElementById('toggle-icon').className == 'bi bi-caret-left'
	) {
		document.getElementById('toggle-icon').className = 'bi bi-caret-right'
	} else {
		document.getElementById('toggle-icon').className = 'bi bi-caret-left'
	}
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
