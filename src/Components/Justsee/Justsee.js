import React from 'react'
import image from './photo.webp'
import './Justsee.css'
export default function Justsee(){
    return(
         <div className='container1'>
             <div className='image'>
            <img src={image}></img>
             </div>
         <div className=" notes">
             <div className='headh1'>
            <h1 > Points To Remember during Typing</h1>
            </div>
            <div className="Notes">
             <ul>
                <li>
                     Always use the indicated finger to press keys a certain key. Dont't try to shift its work to another finger as every finger has it own work this may increase speed for small time but never gone to be good for fast typing
                </li>
                <li>
                      Never stable your hand on keyboard the whole hand should be move . This will lead to incapability of reaching the finger on far keys.
                </li>
                <li>
                      Focus on Accuracy first instead of speed. The speed will increase automatically as based on practice I will take the time of near about 90hrs to reach to speed of 40 words per minute which is average speed.
                </li>

                
             </ul>
             </div>
         </div>
         </div>
    )
}