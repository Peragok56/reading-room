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
            <img src='./image/kab.png'/>
            <div className='about'>
              <div className='left-about'>
                <img src='./image/account.svg'/>
                <h2>Ф.И.О</h2>
                <h1>Сарычев Никита Андреевич</h1>
                <h2>dada@mail.ru</h2>
              </div>
              <div className='right-about'>
                  <div className='card'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" height="124px" viewBox="0 0 24 24" width="224px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm7.48 7.16l-5.01-.43-2-4.71c3.21.19 5.91 2.27 7.01 5.14zm-5.07 6.26L12 13.98l-2.39 1.44.63-2.72-2.11-1.83 2.78-.24L12 8.06l1.09 2.56 2.78.24-2.11 1.83.64 2.73zm-2.86-11.4l-2 4.72-5.02.43c1.1-2.88 3.8-4.97 7.02-5.15zM4 12c0-.64.08-1.26.23-1.86l3.79 3.28-1.11 4.75C5.13 16.7 4 14.48 4 12zm3.84 6.82L12 16.31l4.16 2.5c-1.22.75-2.64 1.19-4.17 1.19-1.52 0-2.94-.44-4.15-1.18zm9.25-.65l-1.11-4.75 3.79-3.28c.14.59.23 1.22.23 1.86 0 2.48-1.14 4.7-2.91 6.17z"/></svg>
                  </div>
                  <div className='card'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="124px" viewBox="0 0 24 24" width="124px" fill="#fff"><g><rect fill="none" height="24" width="24"/></g><g><g><path d="M5,5h2v3h10V5h2v5h2V5c0-1.1-0.9-2-2-2h-4.18C14.4,1.84,13.3,1,12,1S9.6,1.84,9.18,3H5C3.9,3,3,3.9,3,5v14 c0,1.1,0.9,2,2,2h6v-2H5V5z M12,3c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,3,12,3z"/><polygon points="21,11.5 15.51,17 12.5,14 11,15.5 15.51,20 22.5,13"/></g></g></svg>
                  </div>
                  <div className='card'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" height="124px" viewBox="0 0 24 24" width="124px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/></svg>
                  </div>
                  <div className='card'>
                    <svg className='svg' xmlns="http://www.w3.org/2000/svg" height="124px" viewBox="0 0 24 24" width="124px" fill="#fff"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z"/></svg>
                  </div>
              </div>
            </div>
          </div>
      </React.Fragment>
    );
  }
}

export default Home
