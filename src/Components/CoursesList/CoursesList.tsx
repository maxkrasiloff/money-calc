import { Box, Card, Typography } from '@material-ui/core'
import css from './CoursesList.module.css';

const CoursesList = (props: any) => {
    const clickValute = (valute: string) => {
        props.setMainValute(valute);
    }
    let mainValuteLabel = 'RUB';
    let mainValute: any;
    if (props.mainValute) {
        mainValute = props.courses.find((item: any) => item.ID === props.mainValute);
        mainValuteLabel = mainValute.CharCode;
    }
    return (
        <div className={css.cardsContainer}>
            {props.courses.map((valute: any) => {
                let calcValute = valute.Value;
                if (props.mainValute) {
                    calcValute = calcValute / mainValute.Value;
                }
                let arrowClass;
                let arrowIcon;
                if (valute.Previous - valute.Value > 0) {
                    arrowClass = css.toUp;
                    arrowIcon = <span>&#129041;</span>
                }
                else if (valute.Previous - valute.Value < 0) {
                    arrowClass = css.toDown;
                    arrowIcon = <span>&#129043;</span>
                }
                else if (valute.Previous - valute.Value === 0) {
                    arrowClass = css.stable;
                    arrowIcon = <span></span>
                }
                
                return (
                    <Box key={valute.ID} color="text.primary" clone className={css.card}>
                        <Card onClick={() => { clickValute(valute.ID) }}>
                            <Box clone color="#777">
                                <Typography>{valute.Name}</Typography>
                            </Box>
                            <div className={css.blockContent}>
                                <div className={css.courseInfo}>
                                    <Typography className={css.charCode}>{valute.Nominal} {valute.CharCode}</Typography>
                                    <Typography className={css.reverseArrow}>&#10231;</Typography>
                                    <Typography className={css.caclcValute}>{(calcValute).toFixed(4)}</Typography>
                                    <Typography className={css.mainValuteLabel}>{mainValuteLabel}</Typography>
                                </div>
                                <div className={ `${css.CourseDiff} ${arrowClass}` }>
                                    <Typography className={css.arrowCourseWrap}>
                                        {arrowIcon}
                                    </Typography>
                                    <Typography className={css.CourseDiffVal}>{(valute.Previous - valute.Value).toFixed(4)}</Typography>
                                </div>
                            </div>
                        </Card>
                    </Box>
                )
            })}
        </div>
    )
}

export default CoursesList