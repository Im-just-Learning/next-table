import axios from 'axios'

const API_URL = 'http://192.168.0.100'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Autorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api