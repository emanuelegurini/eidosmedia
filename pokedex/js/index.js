import { getEl } from "./modules/utils.js";
import { Header } from "./components/Header.js";
import { Main } from "./components/main.js";
import { PokemonService } from "./services/pokemonService.js";

const initApp = async () => {
	const root = getEl('root')

	try {
		root.appendChild(Header())

		const loadingMain = Main({ results: [], next: null, previous: null })
		root.appendChild(loadingMain)

		const response = await PokemonService.getInitialPokemon()

		root.removeChild(loadingMain)
		root.appendChild(Main(response))

	} catch (error) {
		console.error('Errore nel caricamento:', error)
		root.appendChild(Main({ results: [], next: null, previous: null })) 
	}
}

initApp()



