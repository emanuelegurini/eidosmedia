import { httpGET } from '../modules/http.js'

export const PokemonService = {
  async fetchUrl(url) {
    try {
      const response = await httpGET(url)
      return response
    } catch (error) {
      console.error('Error fetching Pokemon data:', error)
      throw error
    }
  },

  async getInitialPokemon() {
    return this.fetchUrl('https://pokeapi.co/api/v2/pokemon')
  }
}