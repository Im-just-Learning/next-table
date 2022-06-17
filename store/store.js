import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import GroupsService from "../services/GroupsService";

export default class Store{

    /*Loading and modal*/

    isLoading = false
    setLoading(bool) {
        this.isLoading = bool
    }

    isAddShow = false
    setAddShow(bool){
        this.isAddShow = bool
    }
    isEditShow = false
    setEditShow(bool){
        this.isEditShow = bool
    }

    /*And loading and modal*/

    /*Auth*/
    isAuth = false

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool){
        this.isAuth = bool
    }

    async login(username, password){
        try {
            /*const response = await AuthService.login(username, password)
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('un', username)
            localStorage.setItem('pw', password)*/
            this.setAuth(true)
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }

    async logout(){
        try {
            localStorage.removeItem('token')
            localStorage.removeItem('un')
            localStorage.removeItem('pw')
            this.setAuth(false)
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }

    async checkAuth(){
        this.setAuth(true)
        /*this.setLoading(true)
        try {
            const response = await AuthService.login(localStorage.getItem('un'), localStorage.getItem('pw'))
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
        } catch (e) {
            console.log(e.response?.data?.title)
        } finally {
            this.setLoading(false)
        }*/
    }

    /*End auth*/

    /*Groups*/

    groupsList = []

    async groupsGetAll(){
        /*const response = await GroupsService.all()
        console.log(response)
        try {
            const response = await GroupsService.all()
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.title)
        }*/

        this.groupsList = [
            {
                'id': '123er123e',
                'groupNumber': 'П-14-18',
                'yearOfStudy': 4
            },
            {
                'id': '123er1233',
                'groupNumber': 'П-15-18',
                'yearOfStudy': 3
            }
        ]
    }

    async groupAdd(groupNumber, yearOfStudy){
        this.groupsList.push(
            {
                'id': `123314151r${this.groupsList.length}`,
                'groupNumber': groupNumber,
                'yearOfStudy': parseInt(yearOfStudy)
            }
        )
    }

    async groupEdit(id, editedGroup){
        this.groupsList = (this.groupsList.map((group)=>group.id === id? editedGroup : group))
    }

    async groupDelete(id){
        this.groupsList = this.groupsList.filter((group)=>group !== id)
        console.log(this.groupsList)
    }

    /*End groups*/

    /* Calls */

    callsList = [
        {
            dayOfWeek: 1,
            listItems: [
                {
                    id: '1231231541f1df23',
                    position: 1,
                    startTime: '8:30',
                    endTime: '10:10',
                },
            ]
        },
        {
            dayOfWeek: 2,
            listItems: [
                {
                    id: '1231231541f1ds4',
                    position: 1,
                    startTime: '8:30',
                    endTime: '10:10',
                },
                {
                    id: '1231231541f1ds5',
                    position: 2,
                    startTime: '10:30',
                    endTime: '11:40',
                }
            ]
        }
    ]

    daysOfWeek = [
        {
            id: 0,
            name: 'Понедельник'
        },
        {
            id: 1,
            name: 'Вторник'
        },
        {
            id: 2,
            name: 'Среда'
        },
        {
            id: 3,
            name: 'Четверг'
        },
        {
            id: 4,
            name: 'Пятница'
        },
        {
            id: 5,
            name: 'Суббота'
        },
    ]

    async callsGetDay(day){
        /*const response = await GroupsService.all()
        console.log(response)
        try {
            const response = await GroupsService.all()
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.title)
        }*/

    }

    async callAdd(day, addedCall){
        this.callsList = this.callsList.map((dc)=>
        {
            if (dc.dayOfWeek === day){
                dc.listItems.push(addedCall)
            }
        })
    }

    async callEdit(id, editedGroup){
        this.groupsList = (this.groupsList.map((group)=>group.id === id? editedGroup : group))
    }

    async callDelete(id){
        this.groupsList = this.groupsList.filter((group)=>group !== id)
        console.log(this.groupsList)
    }

    /* End calls */

}