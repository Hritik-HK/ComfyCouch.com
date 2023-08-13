import React, { useState } from 'react';
import Rating from './Rating';
import "./productCard.css";
import AddTocartAnimation from "../../assets/logos/AddTocartAnimation.gif"
import { useCartState } from '../../context/CartContext';

//rating,mrp, product name,
export default function ProductCard(props) {
  
   
   const[AddToCartClicked,setAddToCartClicked]=useState(false);
   const cartState = useCartState();
   const dispatch = cartState.dispatch
   const cartData=cartState.state

    function handleAdd(){
      // props.AddToCart(props.productID);
      dispatch({ type: "ADD", payload: props.productID })
      setAddToCartClicked(true);
      setTimeout(()=>setAddToCartClicked(false),2100);
    }

   const IsInCart = (state, id) => {
      const result = cartData.find((item) => item.productID === id);
      return result===undefined?false:true;
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
         {IsInCart(cartData,props.productID)?<button className="green" >ADDED</button> :<button className="card-btn" onClick={handleAdd} >ADD TO CART</button>}
       </div>

       </div>
       </div>}
  </div>;
}
