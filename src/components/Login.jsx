import React, { useState } from 'react';
import "./css/login.css";
import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import {MdCancel} from "react-icons/md";

export default function Login(props) {
    const[current,setCurrent]=useState(0);

    function handleCancel(){
         props.cancel();
    }

    function handleClick(){
        setCurrent(()=>{
            if(current===1){
                return 0;
            }
            else{
                return 1;
            }
        })
    }
  
    const arr=[
        {
            typeName:"Log in",
            btnType:"Log up",
            switchType:"Sign up",
            login:true,
            signUp:false,
            message:"Don't have a Account?"
        },
        {
            typeName:"Sign Up",
            btnType:"Sign up",
            switchType:"Log in",
            signUp:true,
            login:false,
            message:"Already have an Account?"
        }
    ]

    function LoginType(props){
    return(<div className="login">
    <h1>{props.typeName}</h1>
     <input type="email" placeholder='E-mail'/>
     <input type="password" placeholder='Password' name="" id="" />
     {props.signUp && <input type="password" placeholder='Confirm Password' name="" id="" />}
     {props.login && <p>Forgot your password?</p>}
     <button >{props.btnType}</button>
     <h5>or continue using</h5>
     <div className="login-options">
      <FcGoogle className='google-icon'/>
      <FaFacebook className='facebook-icon'/>
      </div>
     <h5>{props.message}</h5>
    </div>);
    }

    
  return ( props.trigger?(<div className='popup-container' >
    <div className="login-overlay" onClick={handleCancel} ></div>

  <div className="popup-content-container">

    {    
        arr.map((page,index)=>{
           return ( <div>  
             {current===index &&  <MdCancel onClick={handleCancel} className='login-cancel-icon'/>}
             {current===index && <div className={page.signUp?"signUp-type":"login-type"}>
                
                 <span onClick={handleClick}>{page.switchType}</span>
             </div> }          
                { current===index && <LoginType
                typeName={page.typeName}
                login={page.login}
                signUp={page.signUp}
                message={page.message}
                btnType={page.btnType}
            />}
            </div>);
        })
    }

  </div>
  </div>) :"");
}
