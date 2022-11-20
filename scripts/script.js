const openIcon = document.getElementById('openIcon')
const closeIcon = document.getElementById('closeIcon')
const mobMenu = document.getElementById('mobMenu')

const ua = document.getElementById('langUa')
const eng = document.getElementById('langEng')

document.addEventListener('DOMContentLoaded', () => {
	openIcon.addEventListener('click', () => {
		mobMenu.classList.add('show')
		mobMenu.classList.add('test-class')
	})
	closeIcon.addEventListener('click', () => {
		mobMenu.classList.remove('show')
	})

	ua.addEventListener('click', () => {
		ua.classList.add('active')
		eng.classList.remove('active')
	})
	eng.addEventListener('click', () => {
		eng.classList.add('active')
		ua.classList.remove('active')
	})
})

