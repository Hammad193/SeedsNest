import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { useCart } from "../context/CartContext";
import products from "../data/products"; 

const CategoryPage = () => {
  const { categoryName } = useParams(); 
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    if (categoryName) {
      const filtered = products.filter(
        (p) => p.category.toLowerCase() === categoryName.toLowerCase()
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(products); 
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [categoryName]);

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* CATEGORY HEADER */}
        <div className="mb-10 text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-800 uppercase tracking-wide">
            {categoryName ? `${categoryName} Collection` : "Our Products"}
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-2 font-medium">
            Discover our premium selection of high-quality verified agricultural products.
          </p>
        </div>

        {/* PRODUCTS DYNAMIC GRID */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
            {filteredProducts.map((item) => (
              <ProductCard
                key={item.id}
                product={item}
                onAddToCart={addToCart}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
            <p className="text-lg font-semibold text-gray-600">
              No Products Found in "{categoryName}" Category.
            </p>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default CategoryPage;