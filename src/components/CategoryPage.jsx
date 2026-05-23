import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import CategoryHero from "../components/CategoryHero";
import { useCart } from "../context/CartContext";
import products from "../data/products";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { addToCart } = useCart();
  const [filteredProducts, setFilteredProducts] = useState([]);

  // CATEGORY CONTENT
  const categoryContent = {
    seeds: {
      title: "Seeds Collection",
      description:
        "Explore premium quality seeds with strong germination and healthy crop growth for every season.",
      route: "Home / Seeds",
    },

    fruits: {
      title: "Fresh Fruits Collection",
      description:
        "Discover naturally grown fresh fruits packed with nutrition, freshness, and rich flavor.",
      route: "Home / Fruits",
    },

    vegetables: {
      title: "Organic Vegetables Collection",
      description:
        "Browse farm-fresh organic vegetables harvested carefully for premium quality and health.",
      route: "Home / Vegetables",
    },

    flowers: {
      title: "Flower Seeds Collection",
      description:
        "Explore premium flower seeds with vibrant colors and high-quality growth for your home garden and outdoor spaces.",
      route: "Home / Seeds / Flowers",
    },
  };

  const currentCategory =
    categoryContent[categoryName?.toLowerCase()] || {
      title: "Our Products",
      description:
        "Discover our premium selection of high-quality verified agricultural products.",
      route: "Home / Products",
    };

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
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <CategoryHero
        title={currentCategory.title}
        description={currentCategory.description}
        route={currentCategory.route}
      />

      {/* PRODUCTS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

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

      </section>
    </div>
  );
};

export default CategoryPage;