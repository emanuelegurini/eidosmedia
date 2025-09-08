import { createEl } from "../utils.js"
import { PokemonList } from "./pokemonList.js"
import { Nav } from "./Nav.js"

export const Main = (data) => {

	const list = data ? [...data] : []
	
	const main = createEl('main')

	const mainSection = createEl('div')
	mainSection.id = "main-section"

	const left = createEl('div')
	left.classList.add('left')

	const right = createEl('div')
	right.classList.add('right')

	main.appendChild(mainSection)
	mainSection.appendChild(left)
	mainSection.appendChild(right)

	const pokemonList = PokemonList(list)

	left.appendChild(pokemonList)

	main.appendChild(Nav())

	return main
}
