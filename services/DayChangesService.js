import $api from "../http";

export default class DayChangesService {
    static async allBrief(){
        return $api.get('/schedule-service-api/v1/schedule-changes-lists/brief')
    }

    static async getDay(id){
        return $api.get(`/schedule-service-api/v1/schedule-changes-lists/${id}`)
    }

    static async addDay(date){
        return $api.post('/schedule-service-api/v1/schedule-changes-lists', {
            date,
            'isOddWeek': true,
            'listItems': []
        })
    }

    static async addItems(listId, groupId, position, descipline, teacher, auditorium){
        return $api.post(`/schedule-service-api/v1/schedule-changes-lists/${listId}/items`, {
            groupId,
            position,
            descipline,
            teacher,
            auditorium
        })
    }

    static async edit(groupNumber, yearOfStudy, id){
        return $api.put(`/schedule-service-api/v1/groups/${id}`, {groupNumber, yearOfStudy})
    }

    static async delete(id){
        return $api.delete(`/schedule-service-api/v1/groups/${id}`)
    }
}