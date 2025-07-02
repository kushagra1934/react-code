import React from "react";
import { useCart } from "../contexts/CartProvider";

function Product({ id, title, price, img }) {
  const { addItemToCart, cart } = useCart();
  function handleAdd() {
    console.log("add to cart");

    for(let item of cart){
        if(item.id===id){
            alert("Item already in cart");
            return;
        }
    }
    const newCartItem = {
      id: id,
      price: price,
      title: title,
      img: img,
      quantity: 1,
    };
    addItemToCart(newCartItem);
    alert("Item added to cart");
  }
  return (
    <div
      style={{ margin: "1rem", padding: "1rem", border: "2px solid #343434" }}
    >
      <p>{id}</p>
      <img src={img} alt={title} height={200} />
      <h4>title: {title}</h4>
      <p>price: {price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  );
}

export default Product;
