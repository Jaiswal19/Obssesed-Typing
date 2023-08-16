import React, { Component } from 'react'
import yu from './pic.gif'
import './remark.css'
export default function Remark(){
    return(
        <div style={{backgroundColor:'rgb(208, 240, 240)'}}>
        <div className='remarks'>
           <div className='yu'>
            <img src={yu}></img>
           </div>
           <ul className='point'>
                <h2 >Practice makes a person perfect</h2>
            <li>
                It is like a game which might be intresting on playing but it needs a time to master it.
            </li>
            <li>
                After certain time-period the typing speed will be constant for some time after that there will we a drastic increse seen in speed.
            </li>
            <li>
                The puchuations are also the same necessary as the alphabets.So keeping practice for all will be good for learning.
            </li>
            <li>
                Don not make the wrong choice for fingers to click as it may difficult to re-learn it.
            </li>

           </ul>
        </div>
        <div className='text-center' style={{padding:'2rem',fontFamily: 'Tektur, cursive'}}>
            <h1>Best Wishes for your journey</h1>
        </div>
        </div>
    )
}
