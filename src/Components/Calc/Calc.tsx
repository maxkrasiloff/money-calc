import { Box, Card, NativeSelect, TextField, Typography } from "@material-ui/core";
import css from './Calc.module.css';
import {valuteType} from '../../redux/courses-reducers';
import React from "react";

type CourseCalcType = {
    mainValute: valuteType,
    secondValute: valuteType,
    changeSecondValute: Function,
    changeMainValute: Function,
    changeValSecondValute: Function,
    changeValMainValute: Function,
    valMainValute: number | string,
    courses: Array<valuteType>,
    reverseValute: React.MouseEventHandler<HTMLDivElement>,
    valSecondValute: number | string,

}

const Calc = (props:CourseCalcType) => {
    const onChangeSecondValute = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.changeSecondValute(event.target.value);
    }
    const onChangeMainValute = (event: React.ChangeEvent<HTMLSelectElement>) => {
        props.changeMainValute(event.target.value);
    }
    const onChangeSecondVal = (event:React.ChangeEvent<HTMLInputElement>) => {
        props.changeValSecondValute(event.target.value);
    }
    const onChangeMainVal = (event:React.ChangeEvent<HTMLInputElement>) => {
        props.changeValMainValute(event.target.value);
    }
    return (


    <div className={css.calcWrapper}>
        <CalcElemnt {...props.mainValute} onChangeSelest={onChangeMainValute} change={onChangeMainVal} value={props.valMainValute} courses={props.courses} propId="mainValute"/>
        <div onClick={props.reverseValute} className={css.reverseIcon}>&#10231;</div>
        <CalcElemnt {...props.secondValute } onChangeSelest={onChangeSecondValute} change={onChangeSecondVal} value={props.valSecondValute} courses={props.courses} propId="secondValute"/>
    </div>

    )
}

interface CourseCalcElemntType extends valuteType  {
    propId: 'mainValute' | 'secondValute',
    onChangeSelest: React.ChangeEventHandler<HTMLSelectElement>,
    courses: Array<valuteType>,
    change: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>,
    value: string | number


}

const CalcElemnt = (props:CourseCalcElemntType) => {
    return (        
    <Box  color="text.primary" clone className={css.card}>
        <Card>
            <Box clone color="#777">
                <Typography>{props.Name}</Typography>
            </Box>            
            <div className={css.cardInfoBlock}>
                <Box  color="text.primary" clone className={css.nativeSelect}>            
                    <NativeSelect id={props.propId} value={props.ID} onChange={props.onChangeSelest}>
                        {props.courses.map(
                            (el:valuteType) => (
                                <option key={el.ID} value={el.ID}>{el.CharCode}</option>
                            )
                        )}
                    </NativeSelect>
                </Box>
                    <div className={css.flexGrow1}></div>
                    <TextField id="mainValute" onChange={props.change} value={props.value} type="number"/>
            </div>
        </Card>
    </Box>
    )
}

export default Calc;