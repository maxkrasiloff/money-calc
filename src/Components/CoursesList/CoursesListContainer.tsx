import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import { getCourses, setMainValute, setCoursesFilter, valuteType } from '../../redux/courses-reducers'
import CourseSearch from "./CourseSearch/CourseSearch";
import CoursesList from "./CoursesList";

let mapStateToProps = (state: any) => {
    return {
        courses: state.courses.courses,
    }
}

type CoursesContainerType = {
    getCourses: Function,
    setMainValute: typeof setMainValute,
    setCoursesFilter: typeof setCoursesFilter,
    courses: {
        courses: Array<valuteType>,
        filter: string,
        mainValute: valuteType
    }
}

const CoursesContainer = (props: CoursesContainerType) => {
    const [coursesLoaded, changeCoursesLoaded] = useState(false);
    if (!coursesLoaded) {
        props.getCourses();
        changeCoursesLoaded(true);
    }
    const changeFilter = (value: string) => {
        props.setCoursesFilter(value);
    }
    const setMainValute = (valute: string) => {
        props.setMainValute(valute);
    }
    const getFiltredValute = (value: string) => {
        const filtred = props.courses.courses.filter(
            (el: valuteType) => (
                (props.courses.filter === undefined || (el.CharCode.toLowerCase().includes(value.toLowerCase()) || el.Name.toLowerCase().includes(value.toLowerCase())))
            )
        )
        return filtred;
    }
    return (
        props.courses?.courses
            ? <div><CourseSearch onchange={changeFilter} /><CoursesList setMainValute={setMainValute} filter={props.courses.filter} courses={getFiltredValute(props.courses.filter)} mainValute={props.courses.mainValute} /></div>
            : <div>Loading...</div>
    )
}

export default compose(
    connect(
        mapStateToProps,
        {
            getCourses,
            setMainValute,
            setCoursesFilter
        }
    )
)
    (CoursesContainer)