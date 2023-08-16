import React,{useState} from 'react'
import notecontext from './noteContext'
const Notestate=(props)=>{
 const state={
     name: 'Abhishek',
     class:'A'
 } 
   const [Text,SetText]=useState('kabul');
   const update=(tulu)=>{
           SetText(tulu);
        // setTimeout(()=>{
        // },1000)
    }
return(
    <notecontext.Provider value={{state,Text,update}}>
        {props.children}
    </notecontext.Provider>
)
}
export default Notestate ;