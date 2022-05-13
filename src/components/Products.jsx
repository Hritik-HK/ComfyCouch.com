import React from 'react';
import "./css/products.css";
import ProductCard from './card/ProductCard';


export default function Products(props) {

  return <div className='products-page-container'>

  <div className="products-page-container-header">
  <h1>ALL PRODUCTS</h1>
  {/* <select name="sort" id="">
        <option value="defalut">Default Sorting</option>
        <option value="price">Sort by Price</option>
        <option value="popular">Sort by Popularity</option>
        <option value="rating">Sort by Rating</option>
   </select> */}
  </div>

    <div className="products-card-container">
     {props.productsData.map((card,index)=>{
         return (<div className='products-page-container-card'>
             <ProductCard 
                 key={card.productID}
                 productID={card.productID}
                 image={card.itemImage}
                 itemName={card.itemName}
                 itemStar={card.itemStar}
                 itemCost={card.itemCost}
                 AddToCart={props.AddToCart}
             />
         </div>);
     })}
    </div>
  </div>;
}
