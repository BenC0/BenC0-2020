let landingTheme = document.body.getAttribute('theme')
if (landingTheme === null) {
	document.body.setAttribute('theme', 2)
	landingTheme = 1
}