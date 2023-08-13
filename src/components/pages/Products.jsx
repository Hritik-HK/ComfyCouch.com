import React from 'react';
import "../css/products.css";
import ProductCard from '../card/ProductCard';
import productsData from '../ProductData/productsData';

export default function Products() {

  return <div className='products-page-container'>

  <div className="products-page-container-header">
  <h1>ALL PRODUCTS</h1>
  </div>

    <div className="products-card-outter-container">
    <div className="products-card-inner-container">
     {productsData.map((card)=>{
         return (<div className='products-page-container-card'>
             <ProductCard 
                 key={card.productID}
                 productID={card.productID}
                 image={card.itemImage}
                 itemName={card.itemName}
                 itemStar={card.itemStar}
                 itemCost={card.itemCost}
             />
         </div>);
     })}
     </div>
    </div>
  </div>;
}
