import $api from "../http";

export default class LessonsService {
    static async all(groupId){
        return $api.get(`/schedule-service-api/v1/schedule-lists?${groupId}`)
    }

    static async add(groupId, dayOfWeek){
        return $api.post(`/schedule-service-api/v1/schedule-lists?${groupId}`, {dayOfWeek})
    }

    static async getOne(id){
        return $api.get(`/schedule-service-api/v1/schedule-lists?${id}`)
    }

    static async EditOne(id, editTable){
        return $api.put(`/schedule-service-api/v1/schedule-lists?${id}`)
    }

    static async delete(id){
        return $api.delete(`/schedule-service-api/v1/schedule-lists?${id}`)
    }
}