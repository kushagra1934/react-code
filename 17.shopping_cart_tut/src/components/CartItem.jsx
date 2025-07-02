import React from "react";
import { useCart } from "../contexts/CartProvider";

function CartItem({ id, title, img, price, quantity }) {
  const { increaseQuantity, decreaseQuantity, removeItemFromCart } = useCart();
  function handleIncreaseQuantity() {
    increaseQuantity(id);
  }
  function handleDecreaseQuantity() {
    if (quantity <= 1) {
      removeItemFromCart(id);
      return;
    }
    decreaseQuantity(id);
  }
  function handleRemoveItem() {
    removeItemFromCart(id);
  }
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>id: {id}</p>
      <p>title: {title}</p>
      <p>img: {img}</p>
      <p>
        price: {price * quantity}
      </p>
      <p>quantity: {quantity}</p>
      <button onClick={handleIncreaseQuantity}>increase quantity</button>
      <button onClick={handleDecreaseQuantity}>decrease quantity</button>
      <button onClick={handleRemoveItem}>remove item</button>
    </div>
  );
}

export default CartItem;
