let landingTheme = document.body.getAttribute('theme')
if (landingTheme === null) {
	document.body.setAttribute('theme', "day")
	landingTheme = "day"
}

function changeThemeColor() {
    let nextTheme = document.body.getAttribute('theme') === "day" ? "night" : "day"
	document.body.setAttribute('theme', nextTheme)

    var metaThemeColor = document.querySelector("meta[name=theme-color]");
    metaThemeColor.setAttribute("content", nextTheme === "day" ? "#2a9d8f" : "#011627");
}

document.querySelector('nav .theme_swapper').addEventListener('click', changeThemeColor)

document.querySelector('nav .menu').addEventListener('click', _ => {
    let nextTheme = document.body.getAttribute('nav') === "active" ? "inactive" : "active"
	document.body.setAttribute('nav', nextTheme)
})
