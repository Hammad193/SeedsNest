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
      whileHover={{ y: -8 }}
      className="group w-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500"
    >

      {/* IMAGE */}
      <div className="relative overflow-hidden">

        {/* SALE BADGE */}
        {product.sale && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute top-3 left-3 bg-green-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-semibold shadow"
          >
            {product.sale}
          </motion.div>
        )}

        {/* CART BUTTON */}
        <motion.button
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => onAddToCart(product)}
          className="absolute top-3 right-3 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 flex items-center justify-center hover:bg-green-600 transition-all duration-300 active:scale-95"
        >
          <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:text-white transition" />
        </motion.button>

        {/* IMAGE */}
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 sm:h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </Link>
      </div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.1 }}
        className="p-4 sm:p-6"
      >

        <Link to={`/product/${product.id}`}>
          <h3 className="text-base sm:text-xl font-bold text-gray-800 group-hover:text-green-600 transition duration-300 line-clamp-1">
            {product.name}
          </h3>
        </Link>

        <div className="flex items-center justify-between mt-4">

          <p className="text-lg sm:text-2xl font-extrabold text-green-600">
            {product.price}
          </p>

          {product.size && (
            <span className="text-xs sm:text-sm text-gray-500">
              {product.size}
            </span>
          )}

        </div>

      </motion.div>
    </motion.div>
  );
};

export default ProductCard;