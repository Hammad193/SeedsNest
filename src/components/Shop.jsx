import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";

const Shop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 m-20">

      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}

    </div>
  );
};

export default Shop;