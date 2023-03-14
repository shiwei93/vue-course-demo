import axios, { AxiosError } from 'axios'

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 2000
})

instance.interceptors.response.use(
    (response) => {
        const { status, data } = response
        if (status === 200) {
            return data
        } else {
            return Promise.reject(data)
        }
    },
    (error) => {
        const err = error as AxiosError
        if (err.response?.status === 401) {
            // jump to login
            return
        }
        return Promise.reject(error)
    }
)

export { instance as apiV2 }
