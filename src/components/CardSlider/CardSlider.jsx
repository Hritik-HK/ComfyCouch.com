import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {
    IoIosArrowDropleftCircle,
    IoIosArrowDroprightCircle
  } from "react-icons/io";
import ProductCard from "../card/ProductCard";
import slideData from './sliderData';
import "./slider.css";
import Typewriter from "typewriter-effect";
import { Link } from 'react-router-dom';


export default function  CardSlider(props) {

    function NextArrow(props){
        const {onClick}=props;

        return (<div onClick={onClick}>
             <IoIosArrowDroprightCircle className="right-arrow" />
        </div>);
    }

    function PrevArrow(props){
        const {onClick}=props;

        return (<div onClick={onClick}>
             <IoIosArrowDropleftCircle className="left-arrow" />
        </div>);
    }
     


    //props for slider
    const settings={
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        //for autoplay of slides
        // autoplay: true,
        // autoplaySpeed: 3000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    }

  return (<div className='slider-container'>

    <h2 className='new-releases'>Check out these New Releases</h2>

    <Slider {...settings} className="slider-cards">
      {slideData.map((card)=>{
          return (<ProductCard 

          key={card.productID}
          productID={card.productID}
          image={card.itemImage} 
          itemName={card.itemName} 
          itemStar={card.itemStar} 
          itemCost={card.itemCost}
          AddToCart={props.AddToCart}
          slide={props.slide}

           />);
      })} 
    </Slider>

    <div className='explore-more'>
    <Link to="/ComfyCouch.com/products">
    <Typewriter
  
  options={{
    strings: ['Shop from Exclusive Range Of Sofas & Bean Bags', 'EXPLORE MORE NOW >>'],
    autoStart: true,
    loop: true,
  }}
  />
 </Link>
    </div>
  </div>);
}
