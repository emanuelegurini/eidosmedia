const form = window.document.getElementById('text-form')

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const textinput = form[0].value.length
	console.log(textinput)
})










