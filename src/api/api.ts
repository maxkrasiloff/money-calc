export const CoursesAPI  = {
    getCourses() {  
        return fetch('https://www.cbr-xml-daily.ru/daily_json.js')
            .then(response => response.json())
    },
}