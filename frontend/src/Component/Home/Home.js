import CodeMirror from 'codemirror'
import { useEffect, useState } from 'react'
import Service from './Service';




export default function Home() {
  
  const [text,setText]=useState("")
  const initialText = `>> function helloUser() {\n>> console.log("Hello Users:");\n>> console.log("Code Along With Your Buddies");\n>> console.log("Collaborate With Your Buddies");\n>> }`;
  const typingSpeed = 100; // Adjust typing speed in milliseconds

   
  useEffect(()=>{
    
    let index = 0;

    const typingInterval = setInterval(() => {
      if (index <= initialText.length) {
        setText(initialText.slice(0, index));
        index += 1;
      } else {
        clearInterval(typingInterval);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);

  },[initialText, typingSpeed])

  
  return (
    <div className=' container-fluid  text-white' style={{backgroundColor:"#1c2333",marginTop:"55px",  background: 'linear-gradient(to right, #8e44ad, #3498db, #00cec9)'
  }}>
        <div className="row">
          <div className="col-lg-4 align-center mt-5 ">
            <img className='img-fluid rounded-circle border border-5 border-primary ' src='https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=1434/https://s3.cointelegraph.com/uploads/2023-01/158029af-a86a-402f-a5b5-e915cc69f138.JPG'/>
          </div>
          <div className="col-lg-8 mt-5">
            <div className='p-2 border border-2 border-primary'>
            <textarea id='editor' className='w-100 bg-dark text-warning p-2 border border-2 border-success   ' rows={10} readOnly
             style={{fontFamily:"revert",fontSize:"22px",backgroundColor:"#000000"}}
             value={text}>
              
            </textarea>
            
            </div>
          </div>
        </div>
        
   <br/>
   <hr className=' border border-3 border-black'/>

{/*   
       <Service/> */}
       </div>
  )
}
