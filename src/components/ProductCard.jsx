import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group w-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
    >
      {/* IMAGE SECTION */}
      <div className="overflow-hidden aspect-[4/3]">

        {/* SALE BADGE */}
        {product.sale && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-3 left-3 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow"
          >
            {product.sale}
          </motion.div>
        )}

        {/* CART BUTTON */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onAddToCart(product)}
          className="absolute top-3 right-3 z-10 w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-white shadow-md flex items-center justify-center hover:bg-green-600 transition-all duration-300"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-white transition" />
        </motion.button>

        {/* IMAGE */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-44 sm:h-52 md:h-60 lg:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </Link>
      </div>

      {/* CONTENT */}
      <div className="p-3 sm:p-4 md:p-5 lg:p-6">

        {/* TITLE */}
        <Link to={`/product/${product.id}`}>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-green-600 transition line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* PRICE + SIZE */}
        <div className="flex items-center justify-between mt-3 sm:mt-4">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold text-green-600">
            {product.price}
          </p>

          {product.size && (
            <span className="text-xs sm:text-sm text-gray-500 font-medium">
              {product.size}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;