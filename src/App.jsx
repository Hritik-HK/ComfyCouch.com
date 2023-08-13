import React,{useState} from "react";
import Navbar from "./components/NavBar/Navbar";
import Footer from "./components/Footer/Footer";
import AllRoutes from "./Routes/Routes";
//array of product objects
import Login from "./components/pages/Login";
import Cart from "./components/pages/Cart";
import "./App.css";

function App(){

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

    <Cart trigger={cartActive} close={handleCart}/> 

    <AllRoutes />
   
    <Footer />
   </div>);
}

export default App;