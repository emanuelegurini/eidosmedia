import { createEl } from "../modules/utils.js"
import { PokemonList } from "./pokemonList.js"
import { Nav } from "./Nav.js"
import { PokemonService } from "../services/pokemonService.js"

export const Main = (apiData) => {
	let currentData = apiData
	let nextUrl = apiData?.next || null
	let prevUrl = apiData?.previous || null

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

	const updateContent = (newApiResponse) => {
		currentData = newApiResponse
		nextUrl = newApiResponse?.next || null
		prevUrl = newApiResponse?.previous || null

		left.innerHTML = ''
		
		const newPokemonList = PokemonList(newApiResponse?.results || [])
		left.appendChild(newPokemonList)

		updateNavButtons()
	}

	const updateNavButtons = () => {
		nav.updateState({
			hasNext: !!nextUrl,
			hasPrev: !!prevUrl
		})
	}

	const handleNext = async () => {
		if (nextUrl) {
			try {
				const newData = await PokemonService.fetchUrl(nextUrl)
				updateContent(newData)
			} catch (error) {
				console.error('Error loading next page:', error)
			}
		}
	}

	const handlePrev = async () => {
		if (prevUrl) {
			try {
				const newData = await PokemonService.fetchUrl(prevUrl)
				updateContent(newData)
			} catch (error) {
				console.error('Error loading previous page:', error)
			}
		}
	}

	const initialPokemonList = PokemonList(apiData?.results || [])
	left.appendChild(initialPokemonList)

	const nav = Nav({
		onNext: handleNext,
		onPrev: handlePrev,
		hasNext: !!nextUrl,
		hasPrev: !!prevUrl
	})

	main.appendChild(nav)

	return main
}
