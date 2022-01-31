import React,{useEffect} from 'react';
import Home from "../components/Home";
import Products from "../components/Products";
import About from '../components/About';
import {Routes, Route,useLocation} from "react-router-dom";

export default function AllRoutes({productsData,AddToCart}) {

 //so that we scroll upto top everytime we navigate
const location = useLocation();
useEffect(() => {
  window.scrollTo(0,0);
}, [location]);   
 

  return (<div>
       <Routes>

      <Route exact path="/ComfyCouch.com" element={<Home AddToCart={AddToCart} />} />

      <Route exact path="/ComfyCouch.com/products" element={<Products 
      productsData={productsData} 
      AddToCart={AddToCart}
      />} />
      <Route exact path="/ComfyCouch.com/aboutUs" element={<About/>} />

    </Routes>
</div>);
}
