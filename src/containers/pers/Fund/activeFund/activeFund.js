import React, {Component} from 'react'
import classes from './activeFund.module.css'

const activeFund = props =>{
        return(
            <div className={classes.Fund}>
                <h1>{props.name}</h1>
            </div>
        )
}

export default activeFund