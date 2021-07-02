import React, { Component } from "react";
import './Reg.css'

class Reg extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
        <form>
            <input placeholder='Фамилия' />
            <input placeholder='Имя' />
            <input placeholder='Отчество' />
            <input placeholder='Почта' />
            <input placeholder='Дата рождение' />
        </form>
      </React.Fragment>
    );
  }
}

export default Reg
