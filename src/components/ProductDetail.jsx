import { useParams } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/CartContext";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="py-32 text-center">
        <h2 className="text-3xl font-bold text-red-500">
          Product not found
        </h2>
      </div>
    );
  }

  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  const handleAddToCart = () => {
    addToCart({
      ...product,
      size: selectedSize.size,
      price: selectedSize.price,
    });
  };

  const suggested = products.filter((p) => p.id !== product.id);

  return (
    <section className="min-h-screen bg-gray-50 mt-20 py-20 px-6 md:px-16">

      <div className="max-w-7xl mx-auto">

        {/* ================= PRODUCT DETAIL ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
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
          >

            <span className="bg-green-100 text-green-700 px-4 py-1 rounded-full text-sm font-medium">
              {product.category}
            </span>

            <h1 className="text-4xl font-bold text-gray-800 mt-5">
              {product.name}
            </h1>

            <p className="text-gray-600 mt-5 text-lg leading-relaxed">
              {product.description}
            </p>

            <div className="mt-8 text-3xl font-bold text-green-700">
              Rs {selectedSize.price}
            </div>

            {/* SIZE */}
            <div className="mt-8">
              <h4 className="font-semibold text-gray-700 mb-3">
                Select Size
              </h4>

              <div className="flex gap-3 flex-wrap">

                {product.sizes.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(item)}
                    className={`px-5 py-2 rounded-full border transition ${
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

            <button
              onClick={handleAddToCart}
              className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg transition hover:scale-105"
            >
              Add To Cart
            </button>

          </motion.div>
        </div>

        {/* ================= SUGGESTED PRODUCTS ================= */}
        <div className="mt-20">

          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Suggested Products
          </h2>

          <div className="relative">

            {/* LEFT */}
            <button
              onClick={() =>
                document.getElementById("slider").scrollBy({
                  left: -300,
                  behavior: "smooth",
                })
              }
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-green-600 hover:text-white"
            >
              ‹
            </button>

            {/* RIGHT */}
            <button
              onClick={() =>
                document.getElementById("slider").scrollBy({
                  left: 300,
                  behavior: "smooth",
                })
              }
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-lg w-10 h-10 rounded-full flex items-center justify-center z-10 hover:bg-green-600 hover:text-white"
            >
              ›
            </button>

            {/* SLIDER */}
            <div
              id="slider"
              className="flex gap-6 overflow-hidden px-10 scroll-smooth"
            >
              {suggested.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="min-w-62.5 bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition hover:-translate-y-2 shrink-0"
                >
                  <img
                    src={item.image}
                    className="w-full h-56 object-cover group-hover:scale-110 transition"
                  />

                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-green-600 font-bold mt-2">
                      Rs {item.price}
                    </p>
                  </div>
                </Link>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ProductDetail;