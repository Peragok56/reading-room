import React, {Component} from 'react'
import './Delo.css'

class Delo extends Component{
    render(){
        return(
            <React.Fragment>
                <div className='info'>
                    <div className='Delo'>
                        <h1><img src='./image/back.svg' /> Дело</h1>
                        <p>info</p>
                    </div>
                    <img src='./image/Delo.jpg' />
                </div>
            </React.Fragment>
        )
    }
}

export default Delo