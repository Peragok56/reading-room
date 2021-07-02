import React, { Component } from "react";
import './Fund.css'
import activeFund from "./activeFund/activeFund";

class Fund extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <div className='Fund'>
            <h1>Фонд 1</h1>
          </div>
          <div className='Fund'>
            <h1>Фонд 2</h1>
          </div>
      </React.Fragment>
    );
  }
}

export default Fund
