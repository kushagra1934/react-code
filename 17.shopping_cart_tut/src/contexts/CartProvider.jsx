import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
function cartReducer(cart, action) {
    switch(action.type){
        case "ADD_ITEM":
            return [...cart,action.payload]
        default:
            return cart;
    }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart=(newCartItem)=>{
    dispatch({
        type:"ADD_ITEM",
        payload:newCartItem
    })
  }
  return (
    <CartContext.Provider value={{ cart, addItemToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
