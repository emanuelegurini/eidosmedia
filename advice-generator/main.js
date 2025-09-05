import {getEl, createEl} from './dom.js'
import { getTextLength, getNumberOfWords  } from './textoperations.js'

const FORM_ID = 'text-form'
const FATHER_ID = 'father'

// STEPS
// 1. create the element
// 2. insert the value inside this element
// 3. append this element to the result div

// const getEl = (value) => window.document.getElementById(value)
// const createEl = (value) => window.document.createElement(value)
const form = getEl(FORM_ID)
const father = getEl(FATHER_ID)

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const textinput = form[0].value
	const charNumDiv = createEl("div")
	const wordsNumDiv = createEl("div")
	charNumDiv.innerHTML = getTextLength(textinput)
	wordsNumDiv.innerHTML = getNumberOfWords(textinput)
	const domElmts = [charNumDiv, wordsNumDiv]
	domElmts.forEach((el) => father.appendChild(el))
})

const btnList = ['50%', '10%']

btnList.forEach((el) => {
	const button = createEl("button")
	button.innerHTML = "button" + el 
	button.addEventListener('click', () => console.log(el))
	father.appendChild(button)
})

/* for (i = 0; i < btnList.length; i++) {
	const button = createEl("button")
	button.innerHTML = "button" + i
	father.appendChild(button)
} */

/* const getTextLength = (value) => value.length
const getNumberOfWords = (value) => value.split(' ').length */











