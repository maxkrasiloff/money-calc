import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import css from './Header.module.css'
import roubleIcon from '../../assets/rouble.png'
const Header = () => {
    return (
        <AppBar className={css.header} position="static">
            <div className={css.headerContent}>
                <Toolbar>
                    <IconButton edge="start">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={css.title}>
                        MoneyCalculator
                    </Typography>

                    <NavLink to="/courses"><Button color="inherit">Курс валют</Button></NavLink>
                    <NavLink to="/calc"><Button color="inherit">Калькулятор</Button></NavLink>
                </Toolbar>
            </div>
        </AppBar>
    )
}


const MenuIcon = () => {
    return (
        <div className={css.MenuIcon}>
            <img src={roubleIcon} alt=""/>
        </div>
    )
}

export default Header;

