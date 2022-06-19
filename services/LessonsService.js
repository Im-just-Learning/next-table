import $api from "../http";

export default class LessonsService {
    static async all(groupId){
        return $api.get(`/schedule-service-api/v1/schedule-lists?${groupId}`)
    }

    static async add(groupId, dayOfWeek){
        return $api.post('/schedule-service-api/v1/groups', {groupNumber, yearOfStudy})
    }

    static async edit(groupNumber, yearOfStudy, id){
        return $api.put(`/schedule-service-api/v1/groups/${id}`, {groupNumber, yearOfStudy})
    }

    static async delete(id){
        return $api.delete(`/schedule-service-api/v1/groups/${id}`)
    }
}