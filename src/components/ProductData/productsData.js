import { v4 as uuidv4 } from "uuid";

import product1 from "../../assets/images/product1.jpg";
import product2 from "../../assets/images/product2.jpg";
import product3 from "../../assets/images/product3.jpg";
import product4 from "../../assets/images/product4.jpg";
import product5 from "../../assets/images/product5.jpg";
import product6 from "../../assets/images/product6.jpg";
import product7 from "../../assets/images/product7.jpg";
import product8 from "../../assets/images/product8.jpg";
import product9 from "../../assets/images/product9.jpg";
import product10 from "../../assets/images/product10.jpg";






const productsData=[
    {  productID:uuidv4(),
      
      itemImage:product1,
     itemCost:"₹22,495",
     costInNum:22495,
     itemStar:4,
    quantity:1,
    itemName:"2 Seater Premium Sofa"
  },
  { productID:uuidv4(),
    
    itemImage:product2,
    itemCost:"₹41,440",
    costInNum:41440,
    itemStar:3,
    quantity:1,
   itemName:"White Fabric SofaSet"
 },
 {productID:uuidv4(),
  
   itemImage:product3,
    itemCost:"₹8,500",
    costInNum:8500,
    itemStar:5,
    quantity:1,
   itemName:"Single sofa Chair"
 },
 { productID:uuidv4(),
  
   itemImage:product4,
    itemCost:"₹5,675",
    costInNum:5675,
    itemStar:3,
    quantity:1,
   itemName:"Bamboo Fabric Stool"
 },
 {productID:uuidv4(),
  
   itemImage:product5,
    itemCost:"₹21,385",
    costInNum:21385,
    itemStar:4,
    quantity:1,
   itemName:"Leather Premium SofaSet"
 },
 { productID:uuidv4(),
  
   itemImage:product6,
  itemCost:"₹13,110",
  costInNum:13110,
  itemStar:4,
  quantity:1,
 itemName:"Yellow Sofa"
},
{ productID:uuidv4(),
  
  itemImage:product7,
  itemCost:"₹24,499",
  costInNum:24499,
  itemStar:5,
  quantity:1,
 itemName:"Premium Blue SofaSet"
},
{ productID:uuidv4(),
  
  itemImage:product8,
  itemCost:"₹34,775",
  costInNum:34775,
  itemStar:5,
  quantity:1,
 itemName:"Premium Fabric SofaSet"
},
{ productID:uuidv4(),
  
  itemImage:product9,
  itemCost:"₹4,899",
  costInNum:4899,
  itemStar:5,
  quantity:1,
 itemName:"Yellow Bean Bag"
},
{ productID:uuidv4(),
  
  itemImage:product10,
  itemCost:"6,899",
  costInNum:6899,
  itemStar:4,
  quantity:1,
 itemName:"Fabric Bean bag"
},

];



export default productsData;