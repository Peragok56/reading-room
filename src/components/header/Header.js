import React, {Component} from 'react' 
import { NavLink } from "react-router-dom";
import './header.css'

class Header extends Component{
    render(){
        return(
            <header>
                <h1>Reading room</h1>
                <ul>
                    <li>
                        <NavLink to='/'>Регистрация</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Авторизация</NavLink>
                    </li>
                    <li>
                        <NavLink to='/'>Обратная связь</NavLink>
                    </li>
                </ul>
            </header>
        )
    }
}

export default Header