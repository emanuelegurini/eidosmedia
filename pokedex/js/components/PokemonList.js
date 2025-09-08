import { createEl } from "../utils.js"

export const PokemonList = (data) => {
	const ul = createEl('ul')

	data?.forEach(pokemon => {
		const li = createEl('li')
		ul.appendChild(li)
		return li.innerHTML = pokemon?.name?.toUpperCase() || 'name not available'
	})

	return ul
}