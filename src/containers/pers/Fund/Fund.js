import React, { Component } from "react";
import './Fund.css'

class Fund extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <h1>Fund</h1>
      </React.Fragment>
    );
  }
}

export default Fund
