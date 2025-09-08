import { createEl } from '../utils.js'

export const Nav = () => { 
	const nav = createEl('nav')

	const prevContainer = createEl('div')
	const btnPrev = createEl('button')
	btnPrev.innerHTML = 'Prev'
	prevContainer.appendChild(btnPrev)

	const nextContainer = createEl('div')
	const btnNext = createEl('button')
	btnNext.innerHTML = 'Next'
	nextContainer.appendChild(btnNext)

	nav.appendChild(prevContainer)
	nav.appendChild(nextContainer)
	return nav 
}