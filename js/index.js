let landingTheme = document.body.getAttribute('theme')
if (landingTheme === null) {
	document.body.setAttribute('theme', 2)
	landingTheme = 1
}
let i = 1
window.setInterval(_ => {
	document.body.setAttribute('theme', i)
	i++;
	if(i === 7) {
		i = 1;
	}
}, 2000)