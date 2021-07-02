import React, { Component } from "react";
import './Inventory.css'

class Inventory extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <h1>Inventory</h1>
      </React.Fragment>
    );
  }
}

export default Inventory
