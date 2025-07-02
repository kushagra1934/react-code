import React from "react";
import { useCart } from "../contexts/CartProvider";
import CartItem from "./CartItem";

function Cart() {
  const { cart } = useCart();
  const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <>
      <div>
        {cart.map((cartItem) => {
          return <CartItem key={cartItem.id} {...cartItem} />;
        })}
      </div>
      <div>
        <h1>Total Amount: {totalAmount}</h1>
      </div>
    </>
  );
}

export default Cart;
