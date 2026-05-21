import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();

  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  // Product not found
  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-red-500">
          Product not found
        </h2>
      </div>
    );
  }

  // Default selected size
  const [selectedSize, setSelectedSize] = useState(
    product.sizes[0]
  );

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize.size,
      price: selectedSize.price,
    });
  };

  return (
    <section className="min-h-screen bg-gray-50 mt-20 py-20 px-6 md:px-16">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg p-5"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-125 object-cover rounded-2xl"
          />
        </motion.div>

        {/* DETAILS */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >

          {/* CATEGORY */}
          <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
            {product.category}
          </span>

          {/* TITLE */}
          <h1 className="text-4xl font-bold text-gray-800 mt-5">
            {product.name}
          </h1>

          {/* DESCRIPTION */}
          <p className="text-gray-600 mt-5 leading-relaxed text-lg">
            {product.description}
          </p>

          {/* PRICE */}
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-green-700">
              Rs {selectedSize.price}
            </h3>
          </div>

          {/* SIZE SELECTOR */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-700 mb-3">
              Select Size
            </h4>

            <div className="flex gap-3 flex-wrap">

              {product.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedSize(item)}
                  className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                    selectedSize.size === item.size
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-green-500"
                  }`}
                >
                  {item.size}
                </button>
              ))}

            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={handleAddToCart}
            className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 hover:scale-105"
          >
            Add To Cart
          </button>

        </motion.div>

      </div>
    </section>
  );
};

export default ProductDetail;