import React, { Component } from "react";
import './Business.css'

class Business extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <div className='Bsu'>
            <h1>Дело 1</h1>
          </div>
          <div className='Bsu'>
            <h1>Дело 2</h1>
          </div>
      </React.Fragment>
    );
  }
}

export default Business
