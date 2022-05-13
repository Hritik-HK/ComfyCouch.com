import React from 'react';
import "./css/cart.css";
import {MdCancel} from "react-icons/md";
import CartCard from './CartCard/CartCard';
import {BsArrowRightSquareFill} from "react-icons/bs";
import emptyCart from "../assets/images/empty_cart.png";


export default function Cart(props) {
   
  const{cartData}=props;

  //order summary calculation

  // const[subtotal,setSubtotal]=useState(0);
  // const[gst,setGST]=useState(0);

  //   function calculateSubtotal (){
  //       let calSubtotal=0;
  //         for(let i=0;i<props.cartData.length;i++){
  //               calSubtotal=calSubtotal+(props.cartData[i].costInNum*props.cartData[i].quantity);
  //         }
  //      setSubtotal(calSubtotal);
  //      let calGST=0.18*calSubtotal;
  //      setGST(calGST);

  //   }


   const subtotal=cartData.reduce((accum,curr)=> accum+(curr.costInNum)*(curr.quantity),0);
   const tax=subtotal*0.18;
   const total=tax+subtotal;


  return (props.trigger && <div className='cart-container'>
    <div className="cart-overlay" onClick={props.close} ></div>

      <div className="cart-inner">
      <MdCancel onClick={props.close} className='cart-close-icon'/>
    <div className="myCart">
        <h1>My Cart</h1>
        <hr />
      </div>   

       
       { cartData.length!==0? <div className="myCart-items-container">

        <div>

        <div className="myCart-items">
             {
               cartData.map((cartItem,index)=>{
                 return (<div key={cartItem.productID}>
                   <CartCard 
                    productID={cartItem.productID}
                     serialNum={index+1}
                     itemName={cartItem.itemName}
                     itemImage={cartItem.itemImage}
                     itemCost={cartItem.itemCost}
                     costInNum={cartItem.costInNum}
                     quantity={cartItem.quantity}
                     RemoveFromCart={props.RemoveFromCart}
                     AddToCart={props.AddToCart}
                   />
                 </div>);
               })
             }
             </div>
             <div className="continue-shopping" onClick={props.close}>
            <div> Continue-Shopping</div>
        
           <BsArrowRightSquareFill />
         </div>
         </div>

    

             <div className="myCart-total">

               <h1>Order Summary</h1>
               <hr />
                <div className="order-details">
                <div><h4>SubTotal</h4></div>
                <div><h4>:</h4></div>
                <div><h4>{"₹"+subtotal}</h4></div>
                
                </div> 
                <div className="order-details">
                <div> <h4>Tax</h4></div> 
                <div> <h4>: </h4></div> 
                <div> <h4>{"₹"+tax.toFixed(2)} </h4></div> 
                </div>
                
                <div className="order-details">
                <div><h4>Delivery </h4></div>
                <div><h4>:</h4></div>
                <div><h4>0 </h4></div>
                
                </div> 
         
                <hr />
                <div className="order-details">
                <div><h4>Total </h4></div>
                <div><h4>: </h4></div>
                <div><h4> {"₹"+ total.toFixed(2)} </h4></div>
              
              </div> 
                    
                    <div className="checkout-button">
                    <button>CHECKOUT</button>
                    </div>
                

              </div>

    
        </div> : <div className='cart-empty'> 
        <div><img src={emptyCart} alt="emptyCart" />
           <div>
           <div className="continue-shopping" onClick={props.close}>
            <div> Continue-Shopping</div>
        
           <BsArrowRightSquareFill />
         </div>
           </div>
        </div></div>}


        </div>

        </div>);
  }
