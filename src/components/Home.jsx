import React from 'react';
import BannerSlideShow from "./ImageBanner/ImageBanner";
import CardSlider from "./CardSlider/CardSlider";
import workFromHomeImg from "../assets/images/WFH.jpg";
import "./css/home.css";
import Typewriter from "typewriter-effect";
import choose1 from "../assets/logos/choose1.jpg";
import choose2 from "../assets/logos/choose2.jpg";
import choose3 from "../assets/logos/choose3.jpg";
import choose4 from "../assets/logos/choose4.jpg";

import { Link } from 'react-router-dom';

export default function Home(props) {
  return <div className='home-container'>
      <BannerSlideShow />
    <CardSlider AddToCart={props.AddToCart}/>
    <div className="work-from-home-container">
      <div className="work-from-home-img">
        <img src={workFromHomeImg} alt="work from home"/>
      </div>
      <div className="work-from-home-text-container">
       <h2>Make your Work From Home
       <Typewriter
      className="work-from-home-text-typewriter"
  options={{
    strings: ['FUN.', 'COMFORTABLE.'],
    autoStart: true,
    loop: true,
  }} />
       </h2>
       <p>A series of professionally-styled living rooms <br/>to help jumpstart your imagination.</p>
       <Link to="/products"><button>EXPLORE NOW</button></Link>
      </div>
    </div>

<div className="choose-us-container">
<h3>WHY CHOOSE US ?</h3>

 <div className="choose-us-detail">
 <div>
     <img src={choose1} alt="choose us"/>
     <p>Free Delivery</p>
 </div>
 <div>
     <img src={choose2} alt="choose us"/>
     <p id="fast-delivery">Fast Delivery</p>
 </div>
 <div>
     <img src={choose3} alt="choose us"/>
     <p>Easy Returns</p>
 </div>
 <div>
     <img src={choose4} alt="choose us"/>
     <p>Cash On Delivery</p>
 </div>
 </div>
 </div>
  </div>;
}
