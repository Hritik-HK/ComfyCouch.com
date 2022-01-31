import React from 'react';
import "./CartCard.css";

export default function CartCard(props) {
  
  function handleRemove(){
     props.RemoveFromCart(props.productID,"remove");
  }

 
 function handleIncrease(){
   props.AddToCart(props.productID);
 }

 function handleDecrease(){
  props.RemoveFromCart(props.productID,"decrease");
 }

  return <div className='cartCard-container'>

        <div className="cart-product-detail-container">
            <h4>{props.serialNum}.</h4>
           <img src={props.itemImage} alt="cart-item" />
           <div className="cart-product-detail">
             <h4>{props.itemName}</h4>
             <p>{props.itemCost} x{props.quantity}</p>
              <button onClick={handleRemove}>Remove</button>
              </div>

        </div>

           <div className="cart-product-quantity">
             <div className='minus' onClick={handleDecrease}>-</div>
             <div>{props.quantity}</div>
              <div className='plus' onClick={handleIncrease}>+</div>
           </div>

  </div>;
}
