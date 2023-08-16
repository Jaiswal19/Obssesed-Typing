import React, { useState } from 'react'
import imu from './yuli.gif'
import './Test.css'
let ar = `content Reacts primary role in an application is to handle the view layer of that application just like the V in a model-view-controller (MVC) pattern by providing the best and most efficient rendering execution. Rather than dealing with the whole user interface as a single unit, React.js encourages developers to separate these complex UIs into individual reusable components that form the building blocks of the whole UI. In doing so, the ReactJS framework combines the speed and efficiency of JavaScript with a more efficient method of manipulating the DOM to render web pages`
let z = ar.split(" ");
export default function Test(props) {
    const [fortimer, setfortimer] = useState('false')
    const [count, setcount] = useState(0);
    const timer = () => {
        setTimeout(() => {
            setcount(count + 1);
        }, 1000);
    }

    if (fortimer === 'true') {
        timer();
    }
    const [text, settext] = useState('');
    // const [ttext, setttext] = useState('');
    const [index, setindex] = useState(0);
    const [colo, setcolo] = useState('black');
    const [accuarray, setaccuarray] = useState([]);
    const [start, setstart] = useState('false');
    const [time, settime] = useState(0);
    // const [speed] = useState("2min");
    // const [accuracy] = useState("2min");
    const [opacity1, setopacity1] = useState(1);
    const [opacity2, setopacity2] = useState(0);
    const funny = (event) => {
        if (start === 'false') {
            setstart('true');
        }
        if (fortimer === 'false')
            setfortimer('true');
        // count.current=count.current+1;
        let x = event.target.value;
        settext(x);
        if (x.endsWith(' ')) {
            // console.log(z[index]);
            // console.log(text);
            if (text === z[index]) {
                setcolo('green');
                setaccuarray(data => {
                    const newresul = [...data];
                    newresul[index] = true;
                    return newresul;
                })
            }
            else if (text !== z[index]) {
                setcolo('red');
                setaccuarray(data => {
                    const newresul = [...data];
                    newresul[index] = false;
                    return newresul;
                })
            }
            setindex(index => index + 1);
            settext('');
            // settext(x);
            // console.log(accuarray);
        }
        // setttext(x);

    }
    const handleclick = () => {
        setopacity1(0.5);
        setopacity2(1);
        // clearTimeout(timer);
        settime(count);

    }
    let funnny = () => {
        setopacity1(1);
        setopacity2(0);
    }

    return (
        <>
            <div className='makeit'>
                <div className='whole m-3' style={{ opacity: opacity1 }}>
                    <div className='container3'>
                        <div className='content-box'>
                            <h1 className='text-center m-2' style={{ fontFamily: 'Tektur, cursive' }}>
                                Typing Content
                            </h1>
                            <div className='input' id='inputtext' style={{ width: '100%', borderRadius: '20px', margin: '1rem', padding: '1rem' }} >
                                <p>
                                    {z.map((word, i) => {
                                        if (i === index - 1) {
                                            return <b style={{ color: colo }} key={i}>{word} </b>
                                        }
                                        else if (i === index)
                                            return <b key={i}>{word} </b>
                                        else {
                                            return <span key={i}>{word} </span>
                                        }
                                    })}
                                </p>
                            </div>
                        </div>
                        {/* { start==='true'? <Time start={start}/>: '0'} */}
                        <p className='time' style={{ fontFamily: 'Tektur, cursive' }}>{count} Seconds</p>
                        <div className='typing-box'>
                            <h1 className='text-center' style={{ fontFamily: 'Tektur, cursive' }}>
                                Type Here
                            </h1>
                            <textarea className='output' id='outputtext' style={{ width: '100%', borderRadius: '20px', margin: '1rem', padding: '1rem' }} rows={10} onChange={funny} value={text} >
                            </textarea>
                            <button style={{ display: 'block', margin: 'auto' }} onClick={handleclick}>Get Results</button>
                        </div>
                    </div>
                    <div className='image-box'>
                        <img src={imu} alt={"this"}></img>
                    </div>
                </div>
            </div>
            <div className='jadu' style={{ opacity: opacity2 }}>
                <h2>Typing Results</h2>
                <div className='table'>
                    <table>
                        <tbody>
                            <tr>
                                <td>Speed(in wpm)</td>
                                <td>{(index / (time / 60)) || 0}</td>

                            </tr>
                            <tr>
                                <td>accuracy</td>
                                <td>{(accuarray.filter(value => value === true).length * 100) / index || 0}(in percent)</td>
                                {/* {console.log(accracy.l)} */}
                            </tr>
                            <tr>
                                <td>Time Taken(in wpm)</td>
                                <td>{time || 0} sec</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <button className='pop-up' onClick={funnny}>Close</button>
            </div>
        </>
    )
}