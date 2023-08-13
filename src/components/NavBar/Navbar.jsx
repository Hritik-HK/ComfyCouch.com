import "./Navbar.css";
import logo from "../../assets/logos/logo.png";
import accountIcon from "../../assets/logos/account.svg";
import cartIcon from "../../assets/logos/cart.svg";
import {Link} from "react-router-dom";


function Navbar({handleLogin,handleCart}){

    return (
    <header className="nav-bar" >
    <Link exact to="/ComfyCouch.com" ><img className="logo" src={logo} alt="logo" /></Link>

    <nav className="text-links-container">
    <ul>
    <Link   exact to="/ComfyCouch.com" className="home text-link">
    <li>
    Home
    </li>
    </Link>
    <li>
    <Link  exact to="/ComfyCouch.com/products" className="product text-link">Products</Link>  
    </li>
    <li>   
    <Link  exact to="/ComfyCouch.com/aboutUs" className="about text-link">About</Link>
    </li>
    </ul>
    </nav>

    <nav className="icon-links-container">
    <ul>
    <li>
    <div className="icon-link" onClick={handleLogin}>
     <img src={accountIcon} alt="img" className="icon-account" />
      <p>Log in</p>
      </div>
    </li>
    <li>

      <div onClick={handleCart} className="cart icon-link">
     <img src={cartIcon} alt="img" className="icon-account" />
      <p>Cart</p>
      </div>

    </li>
    </ul>
    </nav>    
 
    
    </header> );
   
}

export default Navbar;