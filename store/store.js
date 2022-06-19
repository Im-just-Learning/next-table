import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService";
import axios from "axios";
import {API_URL} from "../http";
import GroupsService from "../services/GroupsService";
import CallsService from "../services/CallsService";

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
            const response = await AuthService.login(username, password)
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
        } catch (e) {
            console.log(e)
        }
    }

    async logout(){
        try {
            localStorage.removeItem('token')
            this.setAuth(false)
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }

    async checkAuth(){
        this.setLoading(true)
        try {
            const response = await axios.post(`${API_URL}/identity-service-api/v1/account/refresh-token`, {}, {
                withCredentials: true,
                headers:{
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            })
            localStorage.setItem('token', response.data.token)
            this.setAuth(true)
        } catch (e) {
            console.log(e.response?.data?.title)
        } finally {
            this.setLoading(false)
        }
    }

    /*End auth*/

    /*Groups*/

    groupsList = []
    setGroupsList = (newList)=>{
        this.groupsList = newList
    }

    async groupsGetAll(){
        try {
            const response = await GroupsService.all()
            this.setGroupsList(response.data)
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }

    async groupAdd(groupNumber, yearOfStudy){
        try {
            const response = await GroupsService.add(groupNumber, yearOfStudy)
            this.groupsGetAll()
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }

    async groupEdit(id, editedGroup){
        try {
            const response = await GroupsService.edit(editedGroup.groupNumber, editedGroup.yearOfStudy, id)
            this.groupsGetAll()
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }

    async groupDelete(id){
        try {
            const response = await GroupsService.delete(id)
            this.groupsGetAll()
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }

    /*End groups*/

    /* Calls */

    callsList = []

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

    currentDayId = 0

    setCurrentDayId = (newId)=>{
        this.currentDayId = newId
    }

    setCallsList = (data)=>{
        this.callsList = data
    }

    async callsGetDay(dayId){
        try {
            const response = await CallsService.all(dayId)
            this.setCallsList(response.data)
            console.log(response)
        } catch (e) {
            console.log(e.response?.data?.title)
        }
    }
    /*dayOfWeek, position, startTime, endTime*/
    async callAdd(dayId, addedCall){
        /*try {
            const response = await CallsService.add({
                da
            })
            this.groupsGetAll()
        } catch (e) {
            console.log(e.response?.data?.title)
        }*/
    }

    async callEdit(id, editedGroup){
        this.groupsList = (this.groupsList.map((group)=>group.id === id? editedGroup : group))
    }

    async callDelete(id){
        this.groupsList = this.groupsList.filter((group)=>group !== id)
        console.log(this.groupsList)
    }

    /* End calls */

    /* Lessons */

    lessonsList = []

    currentGroup = this.groupsList[0]

    setCurrentGroup=(group)=>{
        this.currentGroup = group
    }

    /* End lessons */

}