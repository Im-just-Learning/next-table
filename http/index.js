import axios from 'axios'

export const API_URL = 'http://192.168.0.101'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Autorization = `Bearer ${localStorage.getItem('token')}`
    console.log('interceptor request')
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        const response = await axios.post(`${API_URL}/identity-service-api/v1/account/login`, {
            'username': localStorage.getItem('un'),
            'password': localStorage.getItem('pw'),
        }, {
            withCredentials:true,
        })
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
        return $api.request(originalRequest)
    }
    console.log('Нет авторизации')
})

export default $api