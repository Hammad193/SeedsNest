import React from "react";
import products from "../data/products";
import ProductCard from "./ProductCard";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

const Shop = () => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 mt-35 mb-10"
    >
      <motion.div
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.08,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
      >
        {products.map((product) => (
          <motion.div
            key={product.id}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.4 }}
          >
            <ProductCard
              product={product}
              onAddToCart={(item) =>
                addToCart({
                  ...item,
                  qty: 1,
                  size: item?.sizes?.[0]?.size || "Small",
                  price: item?.sizes?.[0]?.price || item.price,
                  weight: item?.sizes?.[0]?.weight || item.weight,
                })
              }
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Shop;