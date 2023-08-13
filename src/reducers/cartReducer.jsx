import productsData from "../components/ProductData/productsData";
import slideData from "../components/CardSlider/sliderData";


export const cartReducer = (state, action) => {

    switch (action.type) {
      case "ADD":
        const product1=productsData.find( (item) => item.productID===action.payload) //from product page
        const product2=slideData.find( (item) => item.productID===action.payload) //from home page slider
        const finalProduct=product1===undefined?product2:product1;
          return [...state, finalProduct]
      case "INCREASE":
        const productInCart1=state.find( (item) => item.productID===action.payload )
        return state.map((item)=> 
          item.productID===action.payload?{...productInCart1,quantity:productInCart1.quantity+1}:item )
      case "DECREASE":
        const productInCart2=state.find( (item) => item.productID===action.payload )
        if(productInCart2.quantity===1){
          const updatedCart = state.filter(
            (item) => item.productID !== action.payload
          )
          return updatedCart
        }
        return state.map((item)=> 
          item.productID===action.payload?{...productInCart2,quantity:productInCart2.quantity-1}:item )
      case "REMOVE":
        const updatedCart = state.filter(
          (item) => item.productID !== action.payload
        )
        return updatedCart

      default:
        return state
    }
  };
  