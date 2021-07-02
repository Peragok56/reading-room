import React, {Component} from 'react'
import { Redirect, Route, Switch, withRouter, NavLink } from "react-router-dom";
import classes from './header.module.css'

class Header extends Component {
    render(){
        return(
            <header className={classes.header}>
                    <h1>Reading room</h1>
                    <div className={classes.Nav}>
                        <NavLink to='/'>Обратная связь</NavLink>
                        <NavLink to='/'>Авторизация</NavLink>
                        <NavLink to='/'>Регистрация</NavLink>
                    </div>
            </header>
        )
    }
}

export default Header