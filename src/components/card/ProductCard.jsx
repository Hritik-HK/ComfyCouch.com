import React, { useState } from 'react';
import Rating from './Rating';
import "./productCard.css";
import AddTocartAnimation from "../../assets/logos/AddTocartAnimation.gif"

//rating,mrp, product name,
export default function ProductCard(props) {
  
   
   const[AddToCartClicked,setAddToCartClicked]=useState(false);


    

    function handleAdd(){
      props.AddToCart(props.productID);
      setAddToCartClicked(true);
      setTimeout(()=>setAddToCartClicked(false),2100);
    }

 
  return <div className='card-container'>

     { AddToCartClicked? <div className='add-to-cart-animation'><img src={AddTocartAnimation} alt="add" /></div>:   
       <div>
      <img src={props.image} alt="sofas" />
       
       <div className='item-detail-container'>

       <div className='item-detail'>
        <p>{props.itemName}</p>
         <Rating stars={props.itemStar} />
         <p>{props.itemCost}</p>
       </div>

       <div>
         <button className="card-btn" onClick={handleAdd} >ADD TO CART</button>
       </div>

       </div>
       </div>}
  </div>;
}
