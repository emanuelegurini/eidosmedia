import { createEl } from "../dom.js"

export const header = () => {
	const header = createEl('header')
	const h1 = createEl('h1')
	h1.innerHTML = "Pokedex"
	header.appendChild(h1)
	return header
}