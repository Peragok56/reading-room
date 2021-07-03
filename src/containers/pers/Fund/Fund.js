import React, { Component } from "react";
import './Fund.css'

class Fund extends Component {
  componentDidMount() {
    document.title = "Главная";
  }
  render() {
    return (
      <React.Fragment>
        <div className='fun'>
        <div className='Fundlist'>
          <h2>Фонды</h2>
              <div className='Fundblock'>
                <h1>Фонд №1</h1>
                <p>Последня опись от 24.06.2021</p>
              </div>
              <div className='Fundblock'>
                <h1>Фонд №2</h1>  
                <p>Последня опись от 25.06.2021</p>
              </div>
              <div className='Fundblock'>
                <h1>Фонд №3</h1>  
                <p>Последня опись от 25.06.2021</p>
              </div>
              <div className='Fundblock'>
                <h1>Фонд №4</h1>  
                <p>Последня опись от 25.06.2021</p>
              </div>
            </div>
          <img src='./image/fund.jpg' />
        </div>
          
      </React.Fragment>
    );
  }
}

export default Fund
