import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const ProductCard = ({ product, onAddToCart }) => {
  // 🔍 Aapke data structure ke mutabiq 'sizes' array se pehli default value nikalna
  const defaultSizeData = product?.sizes && product.sizes.length > 0 ? product.sizes[0] : null;
  const currentPrice = defaultSizeData ? defaultSizeData.price : "0";
  const currentSize = defaultSizeData ? defaultSizeData.size : "";

  const productImg = Array.isArray(product?.image) ? product.image[0] : product?.image;

  // ✅ Toaster Trigger for Add to Cart
  const handleCartClick = (e) => {
    e.preventDefault(); // Link routing ko button click par rokne ke liye
    
    if (onAddToCart) {
      // Parent context ko structured data bhejna
      onAddToCart({
        ...product,
        price: currentPrice,
        size: currentSize,
        qty: 1
      });
      
      toast.success(`${product?.name} added to cart! 🛒`, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        theme: "light",
        className: "pt-6 pb-4 font-medium text-sm",
      });
    }
  };

  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      className="group w-full bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 relative flex flex-col justify-between"
    >
      {/* IMAGE SECTION */}
      <div className="relative">
        {product.sale && (
          <div className="absolute top-3 left-3 z-10 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow">
            {product.sale}
          </div>
        )}

        <Link to={`/product/${product.id}`} className="block overflow-hidden aspect-[4/3] bg-gray-50">
          <img
            src={productImg}
            alt={product.name}
            className="w-full h-44 sm:h-52 md:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
          />
        </Link>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
        <div>
          <Link to={`/product/${product.id}`}>
            <h3 className="text-sm sm:text-base md:text-md font-bold text-gray-800 group-hover:text-green-600 transition line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* {currentSize && (
            <span className="inline-block bg-gray-100 text-gray-600 text-[10px] font-bold px-2 py-0.5 rounded-md mt-1.5 uppercase tracking-wider">
              Pack: {currentSize}
            </span>
          )} */}
        </div>

        {/* BOTTOM ROW: PRICE & BOTTOM RIGHT CART BUTTON */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
          <div>
            <span className="text-[10px] text-gray-400 block font-medium uppercase tracking-wider mb-0.5">Price</span>
            <p className="text-base sm:text-lg font-extrabold text-green-600">
              Rs {currentPrice}
            </p>
          </div>

          {/* CART BUTTON AT BOTTOM RIGHT */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleCartClick}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gray-50 border border-gray-100 shadow-sm flex items-center justify-center hover:bg-green-600 hover:text-white text-green-600 transition-all duration-300 cursor-pointer"
          >
            <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;