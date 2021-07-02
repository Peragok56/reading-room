import React, { Component } from "react";
import './Home.css'

class Home extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
          <div className='left-block'>
            <img src='/image/hat.jpg'/>
            <h1>Админ</h1>
          </div>
          <div className='right-block'>
            <div className='card-list'>
                <div className='card'>
                    <strong>*</strong>
                </div>
                <div className='card'>
                    <strong>ll</strong>
                </div>
                <div className='card'>
                    <strong>O</strong>
                </div>
                <div className='card'>
                    <strong>li</strong>
                </div>
            </div>
              
          </div>
      </React.Fragment>
    );
  }
}

export default Home
