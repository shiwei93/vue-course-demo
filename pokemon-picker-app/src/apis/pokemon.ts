import { apiV2 } from './axios'

function fetchPokemons(offset: number, limit = 15) {
    return apiV2.get('/pokemon', {
        params: {
            offset,
            limit
        }
    })
}

export { fetchPokemons }
