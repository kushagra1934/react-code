import { createContext, useContext, useReducer } from "react";
const CartContext = createContext();
function cartReducer(cart, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return [...cart, action.payload];
    case "INCREASE_QUANTITY":
      return cart.map((item)=>{
        if(item.id===action.payload.id){
          return {...item,quantity:item.quantity+1}
        }
        return item;
      })
    case "DECREASE_QUANTITY":
      
      return cart.map((item)=>{
        if(item.id===action.payload.id){
          return {...item,quantity:item.quantity-1}
        }
        return item;
      })
    case "REMOVE_ITEM":

      return cart.filter((item)=>item.id!==action.payload.id)
    default:
      return cart;
  }
}

function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, []);
  const addItemToCart = (newCartItem) => {
    dispatch({
      type: "ADD_ITEM",
      payload: newCartItem,
    });
  };
  const increaseQuantity = (id) => {
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: { id: id },
    });
  };
  const decreaseQuantity = (id) => {
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: { id: id },
    });
  };
  const removeItemFromCart = (id) => {
    dispatch({
      type: "REMOVE_ITEM",
      payload: { id: id },
    });
  };
  return (
    <CartContext.Provider value={{ cart, addItemToCart, increaseQuantity, decreaseQuantity, removeItemFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}

export default CartProvider;
