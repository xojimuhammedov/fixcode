import axios from "axios";

const request = axios.create({
    headers: {
        "Content-Type": 'application/json'
    },
    baseURL: 'https://fixcode-fastapi-636bb.ondigitalocean.app/',
    params: {}
})

request.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("userToken")
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => {
        console.log(error)
        return Promise.reject(error)
    }
)

request.interceptors.response.use(
    (response) => {
        return response
    },
    (error) => {
        const statusCode = error.response
        if (statusCode === 401) {
            window.localStorage.clear()
        }
        return Promise.reject(error)
    }
)

export { request }