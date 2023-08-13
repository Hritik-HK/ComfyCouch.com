import React, { useState } from 'react';
import "../css/About.css";
import aboutUsMain from "../../assets/images/AboutUs1.jpg";
import Ycombinator from "../../assets/logos/ycombinatorLogo.png";
import elevation from "../../assets/logos/elevationCapitalLogo.jpeg";
import sequoia from "../../assets/logos/SequoiaCapitalLogo.png";
import { Bars } from  'react-loader-spinner'


export default function About() { 

  const[wait,setWait]=useState(true);

  setTimeout(()=>setWait(false), 3000)


  return (wait)?
  <div className="loading">
   <Bars
  height="100"
  width="100"
  color="#f57242"
  ariaLabel="bars-loading"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/>
  </div>
  :(<div>
  <div className="about-us-main">
   <img src={aboutUsMain} alt="About-Us" />

  <div className="about-us-description">
  <h1>About <span>Us</span></h1>
  <p>
  ComfyCouch is now an empire with 200 exclusive furniture stores and 750 retail distributors worldwide. It collaborates with well-known and young talents in modern design and offers furniture collections, decorative accessories, textiles, rugs, and lighting. <br />
  Our designers travel the world, learn new fashion ideas and techniques, and then present the goods based on the gained knowledge. <br />
  We're here to revolutionize furniture Industry.
</p>
  

  </div>

  <div className="quote-container">
  <span className='top'>[</span>
  <p className='quote'>
   Creativity <br /> is allowing yourself  
   to make <br /> mistakes, <br />
   <span className='design'>Design</span>  <br /> is knowing which ones to keep.
   <br />  
    — Mae West
  </p>
  <span className="bottom">]</span>

  </div>
  
  </div>
   <div className='venture-capital-trusted'>
   <div >
   <h1>WE{" "}ARE{"      "} <span>TRUSTED</span> BY</h1>
   </div>
     
     <div className='capital-firms'>
       <div><img src={Ycombinator} alt="Y-Combinator" /></div>
   
       <div><img src={elevation} alt="elevation" /></div>
    
       <div><img src={sequoia} alt="sequoia" /></div>
     </div>

   </div>

     
  </div>)
}
