import React from "react";
import { products } from "../data/products";
import Product from "./Product";

function Products() {
  return (
    <div>
      {products.map((product) => {
        return <Product key={product.id} {...product} />;
      })}
    </div>
  );
}

export default Products;
