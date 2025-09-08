import { createEl } from "../utils.js"

export const Header = () => {
	const header = createEl('header')
	const h1 = createEl('h1')
	h1.innerHTML = "Pokedex"
	header.appendChild(h1)
	return header
}