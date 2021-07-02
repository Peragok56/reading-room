import React, { Component } from "react";
import './Business.css'

class Business extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <h1>Business</h1>
      </React.Fragment>
    );
  }
}

export default Business
