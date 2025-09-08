import { getEl, createEl } from "../dom.js"

export const main = () => {
	const main = createEl('main')

	const mainSection = createEl('div')
	mainSection.id = "main-section"

	const nav = createEl('div')
	nav.id = 'nav-section'

	const left = createEl('div')
	left.classList.add('left')

	const right = createEl('div')
	right.classList.add('right')

	const ul = createEl('ul')
	ul.id = 'pokemon-list'
	const li = createEl('li')

	main.appendChild(mainSection)
	mainSection.appendChild(left)
	mainSection.appendChild(right)

	left.appendChild(ul)
	ul.appendChild(li)
	li.innerHTML = 'element 1'

	main.appendChild(nav)

	return main
}