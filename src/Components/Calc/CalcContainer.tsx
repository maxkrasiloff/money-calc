import React, { useState } from "react";
import { connect } from "react-redux";
import { compose } from 'redux'
import {getCourses, setMainValute, setCoursesFilter, rubSet, valuteType } from '../../redux/courses-reducers'
import CourseCalc from "./Calc";


let mapStateToProps = (state:any) => {
    return {
        courses: state.courses.courses
    }
}

type CalcContainerType = {
    getCourses: Function,
    courses: {
            courses:  Array<valuteType>        
    },
    setSecondValute: Function,
}

const CalcContainer = (props:CalcContainerType) => {
    const [coursesLoaded, changeCoursesLoaded] = useState(false);
    const [mainValute, setMainValute] = useState<any>(rubSet);
    const [secondValute, setSecondValute] = useState<any>(null);
    const [secondVal, setSecondVal] = useState(0);
    const [mainVal, setMainVal] = useState(0);
    if(!coursesLoaded) {
        props.getCourses();
        changeCoursesLoaded(true);
    }
    const changeSecondVal=(value:string)=>{
        if(value !== '') setSecondVal(+value);
        calcMainVal(value);
    }
    const changeMainVal=(value:string)=>{
        setMainVal(+value);
        calcSecondVal(value);
    }

    const calcMainVal = (value:string = '') => {
        let val = mainVal
        if (value) {
            val = +value;
        }
        let newMainVal =  +val * (secondValute.Value / secondValute.Nominal )/ (mainValute.Value / mainValute.Nominal);
        setMainVal(newMainVal);
    }

    const calcSecondVal = (value: string = '') => {
        let val = mainVal
        if (value) {
            val = +value;
        }
        
        let newSecondVal =  +val * (mainValute.Value / mainValute.Nominal )/ (secondValute.Value / secondValute.Nominal);
        setSecondVal(newSecondVal);
    }

    if (props.courses && props.courses.courses && !secondValute) {
        setSecondValute(props.courses.courses[1]);
    }

    const changeSecondValute = (value:string) => {
        setSecondValute(findValuteByID(value));
        
    }
    const changeMainValute = (value:string) => {
        setMainValute(findValuteByID(value));
    }

    const findValuteByID = (ID:string) => {
        const find = props.courses.courses.find(
            (el:valuteType)  => el.ID === ID
        );
        return find;
    }

    const reverseValute = () => {
        let tempValute = mainValute;
        setMainValute(secondValute);
        setSecondValute(tempValute);
        let tempVal = mainVal;
        setMainVal(secondVal);
        setSecondVal(tempVal);
    }
    return (
        props.courses?.courses 
            ? <CourseCalc 
                changeValSecondValute={changeSecondVal} changeValMainValute={changeMainVal} 
                valSecondValute={secondVal} valMainValute={mainVal} 
                reverseValute={reverseValute} mainValute={mainValute} 
                secondValute={secondValute} 
                changeSecondValute={changeSecondValute}
                changeMainValute={changeMainValute}
                courses={props.courses.courses}
                />
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
(CalcContainer)