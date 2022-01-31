import React from 'react';
import {IoStar,IoStarOutline} from "react-icons/io5";

export default function Rating(props) {
    const arr=[0,0,0,0,0];
    for(let i=0;i<props.stars;i++){
        arr[i]=1;
    }
  return (<div>
      {arr.map((star,index)=>{
       if(star===1){
            return <IoStar key={index+10} />;
           
       }
       else{
         return <IoStarOutline key={index+10} />;  
       }
      })}
  </div>);
}
