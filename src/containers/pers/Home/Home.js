import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import './Home.css'

class Home extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <div className='block'>
            <img src='./image/Home.jpg'/>
            <div className='about'>
              <div className='left-about'>
                <img src='./image/account.svg'/>
                <h2>Ф.И.О</h2>
                <h1>Сарычев Никита Андреевич</h1>
                <h2>dada@mail.ru</h2>
              </div>
              <div className='right-about'>
                  <div className='card'>
                      <img src='./image/star.svg' />
                  </div>
                  <div className='card'>
                      <img src='./image/inventory.svg' />
                  </div>
                  <div className='card'>
                      <img src='./image/clock.svg' />
                  </div>
                  <div className='card'>
                      <img src='./image/news.svg' />
                  </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Home
