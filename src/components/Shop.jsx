import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";

const Shop = () => {
  const { addToCart } = useCart();
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-35 mb-10">

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

    {products.map((product) => (
      <ProductCard
        key={product.id}
        product={product}
        onAddToCart={addToCart}
      />
    ))}

  </div>

</div>
  );
};

export default Shop;