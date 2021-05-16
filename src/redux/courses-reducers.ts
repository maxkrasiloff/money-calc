import { CoursesAPI } from "../api/api";

const SET_COURSES = 'SET_USERS';
const SET_COURSES_FILTER = 'SET_COURSES_FILTER';
const SET_MAIN_VALUTE = 'SET_MAIN_VALUTE';

export type couresStateType = {
    courses: null | Array<valuteType>
    filter: null | string
    mainValute: null | string
}

let initialState:couresStateType = {    
    courses: null,
    filter: null,
    mainValute: null,
}


export interface valuteType {
    ID: string,
    CharCode: string,
    Name: string,
    Nominal: number,
    NumCode: string,
    Previous: number,
    Value: number
}

export const rubSet:valuteType = {
    ID: 'RUBLE_BASIC',
    CharCode: 'RUB',
    Name: 'Российский рубль',
    Nominal: 1,
    NumCode: '-24',
    Previous: 1,
    Value: 1
}

/* thunkCreators */
export const getCourses = () => {
    return (dispatch:Function) => {
        CoursesAPI.getCourses().then(
            courses => {
                
                let coursesArr = [];
                coursesArr.push(rubSet);
                for (let key in courses.Valute) {
                    coursesArr.push(courses.Valute[key]);
                }
                
                dispatch(setCourses(coursesArr));
            }
        )
    }
}

export const setMainValute = (valute:string) => ({ type: SET_MAIN_VALUTE, valute: valute })
export const setCourses = (courses:Array<valuteType>) => ({ type: SET_COURSES, courses: courses })
export const setCoursesFilter = (filter:string) => ({ type: SET_COURSES_FILTER, filter: filter })
export const coursesReducer = (state:couresStateType = initialState, action:any) => {

    switch (action.type) {
        case SET_COURSES:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    courses: action.courses
                }
            }
        case SET_COURSES_FILTER:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    filter: action.filter,
                }
            }
        case SET_MAIN_VALUTE:
            return {
                ...state,
                courses: {
                    ...state.courses,
                    mainValute: action.valute
                }
            }
        default:
            return state;
    }
}

export default coursesReducer;