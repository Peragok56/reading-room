import React, { Component } from "react";
import './Pers.css'
import Home from './Home/Home'
import Fund from "./Fund/Fund";
import Opis from "./Opis/Opis"
import Business from "./Business/Business";

class Pers extends Component {
  state = {
    block: 'opis'
  }
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    const RenderBlock = () => {
      switch(this.state.block) {
        case 'home':
          return <Home />
        case 'fund':
          return <Fund />
        case 'business':
          return <Business />
        case 'opis':
          return <Opis />
      }
    }
    return (
      <React.Fragment>
          <RenderBlock />
      </React.Fragment>
    );
  }
}

export default Pers
