// Подключение библиотек
import React, { Component } from "react";
import './Main.css'

class Main extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Hello world!</h1>
        </div>
      </React.Fragment>
    );
  }
}

export default Main
