import { v4 as uuidv4 } from "uuid";

import slide1 from "../../assets/images/slide1.jpg";
import slide2 from "../../assets/images/slide2.jpg";
import slide3 from "../../assets/images/slide3.jpg";
import slide4 from "../../assets/images/slide4.jpg";
import slide5 from "../../assets/images/slide5.jpg";
import slide6 from "../../assets/images/slide6.jpg";
import slide7 from "../../assets/images/slide7.jpg";





const slideData=[

    { productID:uuidv4(),
  
      itemImage:slide1,
     itemCost:"₹26,775",
     costInNum:26775,
      
     itemStar:4,
     quantity:1,
    itemName:"Fabric Sofas-cum bed"
  },
  {
    productID:uuidv4(),

    itemImage:slide2,
    itemCost:"₹21,440",
    costInNum:21440,
    itemStar:3,
     quantity:1,
   itemName:"2 Seater Fabric Sofas"
 },
 {
   productID:uuidv4(),

   itemImage:slide3,
    itemCost:"₹31,500",
    costInNum:31500,
    itemStar:5,
     quantity:1,
   itemName:"L-shaped sofas"
 },
 {
   productID:uuidv4(),

   itemImage:slide4,
    itemCost:"₹20,675",
    costInNum:20675,
    itemStar:3,
     quantity:1,
   itemName:"Grey 2-Seater Fabric Sofas"
 },
 {
   productID:uuidv4(),

   itemImage:slide5,
    itemCost:"₹26,385",
    costInNum:26385,
    itemStar:4,
     quantity:1,
   itemName:"Fabric Sofas-Chair set"
 },
 {
   productID:uuidv4(),

   itemImage:slide6,
  itemCost:"₹36,775",
  costInNum:36775,
  itemStar:4,
   quantity:1,
 itemName:"Fabric Sofas-Living room Set"
},
{
  productID:uuidv4(),
  itemImage:slide7,
  itemCost:"₹10,775",
  costInNum: 10775,
  itemStar:5,
   quantity:1,
 itemName:"Fabric Sofa Chair"
}
];

export default slideData;