import { createEl } from '../modules/utils.js'

export const Nav = ({ onNext, onPrev, hasNext, hasPrev }) => { 
	const nav = createEl('nav')

	const prevContainer = createEl('div')
	const btnPrev = createEl('button')
	btnPrev.innerHTML = 'Prev'
	btnPrev.disabled = !hasPrev
	btnPrev.addEventListener('click', onPrev)
	prevContainer.appendChild(btnPrev)

	const nextContainer = createEl('div')
	const btnNext = createEl('button')
	btnNext.innerHTML = 'Next'
	btnNext.disabled = !hasNext
	btnNext.addEventListener('click', onNext)
	nextContainer.appendChild(btnNext)

	nav.appendChild(prevContainer)
	nav.appendChild(nextContainer)

	nav.updateState = ({ hasNext: newHasNext, hasPrev: newHasPrev }) => {
		btnNext.disabled = !newHasNext
		btnPrev.disabled = !newHasPrev
	}

	return nav 
}