import { useContext,createContext, useReducer} from "react";
import { cartReducer } from "../reducers/cartReducer";

 const CartContext = createContext();


 const Context = ({children}) => {

     const [state, dispatch] = useReducer(cartReducer, []);
  
  return (
    <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>
  );
};

export const useCartState = () => {
    return useContext(CartContext);
  };

export default Context;