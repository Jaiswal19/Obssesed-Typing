import React ,{useState} from 'react'
import './Middle.css';
import imag from './7SCA.gif';
import Test from '../Test/Test';
import Remark from  '../Remark/Remark';
import Justsee from '../Justsee/Justsee';
export default function Middle() {
  const handleclick = () => {
   setshow(false);
  }
  const [remark,setremark]=useState(true);
  const [show,setshow]=useState(true);
  const [Justsee,setJustsee]=useState(true);
return (
    <div>
       { Justsee && remark && show && <div className="section d-flex p-3">
        <div className="section-part-2 ">
          <img src={imag} alt="loading "></img>
        </div>
        <div className="section-part-1">
          <div className="box-1">
            <h2 className="box-heading">Let's Start</h2>
            <p>As much as you type larger will be your typing speed . The graph of speed for beginner is non-monotonic. First Decreases then Increses, then stable and after some time it increases.</p>
            <div className='forbtn'>
              <button className="btn-btn" onClick={handleclick}>
                Practice Now
              </button>
              {/* <button className="btn-btn " onClick={handleclick}>
                Track Your Journey
              </button> */}
            </div>
          </div>
          <div className="box-1">
            <h2 className="box-heading">Simple Guide</h2>
            <p>
              Read Just See and Remark section to practice under guidence. It helps you to train your fingers more effiently and fast on keyboard.Here I share my mistakes analysy during the practice.
            </p>
            <div className='forbtn'>
              <button className="btn-btn " onClick={() => {
                 setremark(false);
              }}>
                Go to Remark
              </button>
              <button className="btn-btn " onClick={() => {
               setJustsee(false);
              }}>
                Guidelines
              </button>
            </div>
          </div>
          <hr />
        </div>
      </div>}
      {!show && <Test/>}
      {!remark && <Remark/>}
      {!Justsee && <Justsee/>}
    </div>
  )
}