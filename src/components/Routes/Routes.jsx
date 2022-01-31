import React,{useEffect} from 'react';
import Home from "../Home";
import Products from "../Products";
import About from '../../About';
import {Routes, Route,useLocation} from "react-router-dom";

export default function AllRoutes({productsData,AddToCart}) {

 //so that we scroll upto top everytime we navigate
const location = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
}, [location]);   
 

  return (<div>
       <Routes>

      <Route exact path="/" element={<Home AddToCart={AddToCart} />} />

      <Route exact path="/products" element={<Products 
      productsData={productsData} 
      AddToCart={AddToCart}
      />} />
      <Route exact path="/aboutUs" element={<About/>} />

    </Routes>
</div>);
}
