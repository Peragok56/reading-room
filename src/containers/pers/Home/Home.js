import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <h1>Home</h1>
      </React.Fragment>
    );
  }
}

export default Home
