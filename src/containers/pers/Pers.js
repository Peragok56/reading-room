import React, { Component } from "react";
import './Pers.css'
import Home from './Home/Home'
import Fund from "./Fund/Fund";
import Opis from "./Opis/Opis"
import Delo from "./Delo/Delo";
import Business from "./Business/Business";

class Pers extends Component {
  state = {
    block: 'home'
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
        case 'delo':
          return <Delo />
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
