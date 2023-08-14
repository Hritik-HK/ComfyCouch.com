import React,{useState, useEffect} from 'react';
import { Bars } from  'react-loader-spinner'
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

  const imagePaths=[image1,image2,image3,image4];

  //to ensure all the images are loading
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const imagePromises = imagePaths.map((path) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = path;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
  
    Promise.allSettled(imagePromises).then((results) => {
      const allImagesLoaded = results.every(result => result.status === 'fulfilled');
      if (allImagesLoaded) {
        setImagesLoaded(true);
      } else {
        console.log("banner images loading fail, plz refresh or check internet connection")
      }
    });
  }, []);
  

  const[bannerImage, setBannerImage]=useState(1);

  //lenth of array
  const len=imagePaths.length;

  function prevBtn(){
    setBannerImage((bannerImage===0)?len-1:bannerImage-1);
  }
  function nextBtn(){
    setBannerImage((bannerImage===len-1)?0:bannerImage+1);
  }


  return (<div className='home-banner-container'>
       <IoIosArrowDropleftCircle className="left-arrow arrows" onClick={prevBtn}/>
       <IoIosArrowDroprightCircle className="right-arrow arrows" onClick={nextBtn} />
       { !(imagesLoaded) ? 
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
       </div>:
        (imagePaths.map((slide,index)=>{
         return (<div className={bannerImage===index?"slide active":"slide"} key={index}>
          <div className="ad-container">

          <div className="ad-text">
           <p>EXCLUSIVE</p> 
           <p className='collections'>COLLECTIONS</p>
           <div>

           </div>
           <Link exact to="/ComfyCouch.com/products" className='banner-btn'><span>SHOP NOW</span></Link>
           </div>

          </div>
             { (bannerImage===index && <img src={slide} alt="sofa-AD"/>)}
         </div>);
       }))}
  </div>);
}
