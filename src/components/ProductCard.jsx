import React, { useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  // Sizes array
  const sizes = product.sizes || [];

  // Default selected size
  const [selectedSize, setSelectedSize] = useState(
    sizes.length > 0 ? sizes[0] : null
  );

  // Current price according to selected size
  const currentPrice = selectedSize
    ? selectedSize.price
    : product.price;

  const handleAddToCart = () => {
    addToCart({
      ...product,
      selectedSize: selectedSize?.size,
      price: currentPrice,
    });
  };

  return (
    <div className="border p-4 rounded-2xl shadow hover:shadow-xl transition-all duration-300 bg-white flex flex-col justify-between">

  {/* PRODUCT IMAGE */}
  <Link to={`/product/${product.id}`}>
    <img
      src={product.image}
      alt={product.name}
      className="h-48 w-full object-cover rounded-xl"
    />
  </Link>

  {/* PRODUCT INFO */}
  <div className="mt-4">
    <Link to={`/product/${product.id}`}>
      <h2 className="font-bold text-lg text-gray-800">
        {product.name}
      </h2>
    </Link>

    <p className="text-green-700 font-semibold mt-1">
      Rs {currentPrice}
    </p>
  </div>

  {/* SIZE SELECTOR */}
  {sizes.length > 0 && (
    <div className="flex justify-end gap-2 mt-4 flex-wrap">

      {sizes.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelectedSize(item)}
          className={`px-3 py-1 rounded-full text-sm border transition-all duration-300 ${
            selectedSize?.size === item.size
              ? "bg-green-600 text-white border-green-600"
              : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
          }`}
        >
          {item.size}
        </button>
      ))}

    </div>
  )}

  {/* ADD TO CART BUTTON */}
  <button
    onClick={handleAddToCart}
    className="mt-5 bg-green-600 hover:bg-green-700 text-white px-4 py-3 rounded-xl transition-all duration-300 w-full"
  >
    Add to Cart
  </button>

</div>
  );
};

export default ProductCard;