import React, { Component } from "react";
import './Reg.css'

class Reg extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
        <form className='regForm'>
            <h1>Регистрация</h1>
            <input placeholder='Фамилия' />
            <input placeholder='Имя' />
            <input placeholder='Отчество' />
            <input placeholder='Почта' />
            <input placeholder='Дата рождение' />
            <button type='submit'>Зарегестрироватся</button>
        </form>
      </React.Fragment>
    );
  }
}

export default Reg
