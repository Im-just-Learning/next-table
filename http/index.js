import axios from 'axios'

export const API_URL = 'http://192.168.0.102'

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry){
        originalRequest._isRetry = true
        try {
            const response = await axios.post(`${API_URL}/identity-service-api/v1/account/refresh-token`, {}, {
                withCredentials: true,
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            localStorage.setItem('token', response.data.token)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('Не авторизован')
        }
    }
    throw error
})

export default $api