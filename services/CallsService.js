import $api from "../http";

export default class CallsService {
    static async all(dayOfWeek){
        return $api.get(`/schedule-service-api/v1/call-schedule-lists?dayOfWeek=${dayOfWeek}`)
    }

    static async add(dayOfWeek, position, startTime, endTime){
        return $api.post('/schedule-service-api/v1/call-schedule-lists/items', {dayOfWeek, position, startTime, endTime})
    }

    static async edit(position, startTime, endTime, id){
        return $api.put(`/schedule-service-api/v1/call-schedule-lists/items/${id}`, {position, startTime, endTime})
    }

    static async delete(id){
        return $api.delete(`/schedule-service-api/v1/call-schedule-lists/items/${id}`)
    }
}