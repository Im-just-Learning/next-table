import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";

export default class Store{
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool){
        this.isAuth = bool
    }

    async login(username, password){
        try {
            const response = await AuthService.login(username, password)
            console.log(response)
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
        } catch (e) {
            console.log(e.response?.data?.message)
        }
    }
}