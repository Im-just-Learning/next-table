import $api from "../http";

export default class GroupsService {
    static async all(){
        return $api.get('/schedule-service-api/v1/groups')
    }

    static async add(groupNumber, yearOfStudy){
        return $api.post('/schedule-service-api/v1/groups', {groupNumber, yearOfStudy})
    }

    static async edit(groupNumber, yearOfStudy, id){
        return $api.put(`/schedule-service-api/v1/groups/${id}`, {groupNumber, yearOfStudy})
    }

    static async delete(groupNumber, yearOfStudy){
        return $api.delete(`/schedule-service-api/v1/groups/${id}`)
    }
}