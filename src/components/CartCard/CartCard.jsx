import React from 'react';
import "./CartCard.css";
import { useCartState } from '../../context/CartContext';

export default function CartCard(props) {

  const cartState=useCartState();
  const dispatch=cartState.dispatch;

  return <div className='cartCard-container'>

        <div className="cart-product-detail-container">
            <h4>{props.serialNum}.</h4>
           <img src={props.itemImage} alt="cart-item" />
           <div className="cart-product-detail">
             <h4>{props.itemName}</h4>
             <p>{props.itemCost} x{props.quantity}</p>
              <button onClick={()=> dispatch({type: "REMOVE", payload:props.productID})}>Remove</button>
              </div>

        </div>

           <div className="cart-product-quantity">
             <div className='minus' onClick={()=>dispatch({type: "DECREASE", payload:props.productID})}>-</div>
             <div>{props.quantity}</div>
              <div className='plus' onClick={()=>dispatch({type: "INCREASE", payload:props.productID})}>+</div>
           </div>

  </div>;
}
