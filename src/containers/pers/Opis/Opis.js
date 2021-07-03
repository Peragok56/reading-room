import React, {Component} from 'react'
import './Opis.css'

class Opis extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='fun'>
        <div className='Fundlist'>
          <h2><img src='./image/back.svg' /> Фонды > Описи</h2>
              <div className='Fundblock'>
                <h1>Опись №1</h1>
                <p>Последня опись от 24.06.2021</p>
              </div>
              <div className='Fundblock'>
                <h1>Опись №2</h1>  
                <p>Последня опись от 25.06.2021</p>
              </div>
              <div className='Fundblock'>
                <h1>Опись №3</h1>  
                <p>Последня опись от 25.06.2021</p>
              </div>
              <div className='Fundblock'>
                <h1>Опись №4</h1>  
                <p>Последня опись от 25.06.2021</p>
              </div>
            </div>
          <img src='./image/fund.jpg' />
        </div>
            </React.Fragment>
        )
    }
}

export default Opis