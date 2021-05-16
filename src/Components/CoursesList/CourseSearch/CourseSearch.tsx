import { TextField } from "@material-ui/core"
import css from '../CoursesList.module.css'
const classes = {
    floatingLabelFocusStyle: {
        color: "#333"
    }
}

let CourseSearch = (props:any) => {
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onchange(e.currentTarget.value);
    }
    return (
        <div className={css.searchFormWrapper}>
            <form  noValidate autoComplete="off" style={{width: '100%'}}>
                <TextField id="standard-basic" label="Поиск..." value={props.value} style={{width: '100%'}}  InputLabelProps={{
        style: classes.floatingLabelFocusStyle,
    }} onChange={onchange}/>
            </form>
        </div>
        
    )
}

export default CourseSearch;