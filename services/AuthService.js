import $api from "../http";

export default class AuthService {
    static async login(username, password){
        return $api.post('/identity-service-api/v1/account/login', {username, password}, {withCredentials: true})
    }
}