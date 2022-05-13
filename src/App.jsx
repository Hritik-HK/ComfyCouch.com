import React,{useState} from "react";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./Routes/Routes";
//array of product objects
import productsData from "./components/ProductData/productsData";
import slideData from "./components/CardSlider/sliderData";
import Login from "./components/Login";
import Cart from "./components/Cart";
import "./App.css";

function App(){

   const[cartData, setCartData]=useState([]);

     

    function handleAddToCart(productID){


      const productInCart=cartData.find( (item) => item.productID===productID );
         
      if(productInCart!==undefined){
        setCartData(cartData.map((item)=> 
          item.productID===productID?{...productInCart,quantity:productInCart.quantity+1}:item ))
           
      }
      else{
        
        const product=productsData.find( (item) => item.productID===productID );
        const slide=slideData.find( (item) => item.productID===productID );
        

       if(product!==undefined){
         setCartData([...cartData,product]);
       } 
       else{
         setCartData([...cartData,slide]);
       }


      }
    
    }
     
    function handleRemoveFromCart(productID,type){

      const productInCart=cartData.find( (item) => item.productID===productID );

      if(type==="remove"){
        productInCart.quantity=1;
        const updateCart=cartData.filter( (item) => item.productID!==productID );
        setCartData(updateCart);

      }

      else{
        if(productInCart.quantity===1){
          const updateCart=cartData.filter( (item) => item.productID!==productID );
          setCartData(updateCart);
        }
        
        else{
          setCartData(cartData.map((item)=> 
          item.productID===productID?{...productInCart,quantity:productInCart.quantity-1}:item ))
        }
           

      }

    
      

    }


    const[loginActive,setLogin]=useState(false);
    const[cartActive,setCartActive]=useState(false);
 
    function handleLogin(){
      setLogin(!loginActive);
    }
 
  
 
    function handleCart(){
      setCartActive(!cartActive);
    } 
 
    if(loginActive===true || cartActive===true){
      document.body.classList.add("active-popup");
    }
    else{
      document.body.classList.remove("active-popup");
    }


    return(<div>
    <Navbar
     handleLogin={handleLogin}
     handleCart={handleCart}
    />

<Login trigger={loginActive} cancel={handleLogin} />

<Cart trigger={cartActive}
    close={handleCart}
    cartData={cartData} 
    RemoveFromCart={handleRemoveFromCart}
    AddToCart={handleAddToCart} 
/> 

    <AllRoutes 
     productsData={productsData} 
     AddToCart={handleAddToCart} 
      />
   
    <Footer />
   </div>);
}

export default App;