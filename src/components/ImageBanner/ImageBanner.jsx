import React,{useState,useEffect} from 'react';
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle
  } from "react-icons/io";
import "./imageBanner.css";
  
  
import image1 from "../../assets/images/main1.jpg";
import image2 from "../../assets/images/main2.jpg";
import image3 from "../../assets/images/main3.jpg";
import image4 from "../../assets/images/main4.jpg";

import { Link } from 'react-router-dom';


export default function ImageBanner() {

  const imageData=[image1,image2,image3,image4];

  const[bannerImage, setBannerImage]=useState(0);

  //lenth of array
  const len=imageData.length;

  function prevBtn(){
    setBannerImage((bannerImage===0)?len-1:bannerImage-1);
  }
  function nextBtn(){
    setBannerImage((bannerImage===len-1)?0:bannerImage+1);
  }


useEffect(()=>{
const timer=setTimeout(()=>{
  nextBtn();
},4000);

return ()=>{
  clearTimeout(timer);
}
},[bannerImage]);

 
    
  return (<div className='home-banner-container'>
       <IoIosArrowDropleftCircle className="left-arrow arrows" onClick={prevBtn}/>
       <IoIosArrowDroprightCircle className="right-arrow arrows" onClick={nextBtn} />
       {imageData.map((slide,index)=>{
         return (<div className={bannerImage===index?"slide active":"slide"} key={index}>
          <div className="ad-container">

          <div className="ad-text">
           <p>EXCLUSIVE</p> 
           <p className='collections'>COLLECTIONS</p>
           <div>

           </div>
           <Link to="/products" className='banner-btn'><span>SHOP NOW</span></Link>
           </div>

          </div>
             { (bannerImage===index && <img src={slide} alt="sofa-AD"/>)}
         </div>);
       })}
  </div>);
}
