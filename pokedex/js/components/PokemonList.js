import { createEl } from "../modules/utils.js"

export const PokemonList = (list) => {
	const ul = createEl('ul')

	list?.forEach(pokemon => {
		const li = createEl('li')
		li.innerHTML = pokemon?.name?.toUpperCase() || 'name not available'
		ul.appendChild(li)
	})

	return ul
}