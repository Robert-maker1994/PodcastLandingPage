import React from 'react'
import Buttons from './Buttons/Buttons'
import './success.css'
import background from './background.jpg'
export default function Success() {
  
    return (
        <div>
        <img src={background} alt="#" />
        <div className="writing center">
            <h1>Thank you for Subscribing</h1>
            <h3> Please leave a reveiw!<br />
            New podcasts every month.</h3>
            <Buttons/>
        </div>
    </div>
    )
}
