import { useState } from "react";
import CategoryHero from "../components/CategoryHero";
import CategoryProductCard from "../components/CategoryProductCard";
import CategorySidebar from "../components/CategorySidebar";
import { vegetableProducts } from "../data/categoryProducts";

const VegetableCategory = () => {

  const [selectedRating, setSelectedRating] = useState("");
  const [selectedStock, setSelectedStock] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");
  const [sortOption, setSortOption] = useState("");

  let filteredProducts = vegetableProducts.filter((product) => {

    const matchRating =
      !selectedRating ||
      product.rating >= Number(selectedRating);

    const matchStock =
      !selectedStock ||
      product.status === selectedStock;

    const matchSize =
      !selectedSize ||
      product.size === selectedSize;

    const matchPrice =
      !selectedPrice ||
      product.price <= Number(selectedPrice);

    return (
      matchRating &&
      matchStock &&
      matchSize &&
      matchPrice
    );
  });
  // SORTING
  if (sortOption === "lowToHigh") {
    filteredProducts.sort((a, b) => a.price - b.price);
  }
  if (sortOption === "highToLow") {
    filteredProducts.sort((a, b) => b.price - a.price);
  }
  if (sortOption === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* HERO */}
      <CategoryHero
        title="Vegetable Seeds Collection"
        description="Discover healthy and organic vegetable seeds perfect for kitchen gardening and fresh home-grown vegetables."
        route="Home / Seeds / Vegetables"
      />
      {/* MAIN SECTION */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* SIDEBAR */}
          <div>
            <CategorySidebar
              selectedRating={selectedRating}
              setSelectedRating={setSelectedRating}
              selectedStock={selectedStock}
              setSelectedStock={setSelectedStock}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
              selectedPrice={selectedPrice}
              setSelectedPrice={setSelectedPrice}
            />
          </div>
          {/* PRODUCTS */}
          <div className="lg:col-span-3">
            {/* TOP BAR */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                Vegetable Products
              </h2>
              {/* SORT */}
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="border rounded-xl px-4 py-3 outline-none focus:border-green-600 bg-white"
              >
                <option value="">Sort Products</option>
                <option value="lowToHigh">
                  Price Low To High
                </option>
                <option value="highToLow">
                  Price High To Low
                </option>
                <option value="rating">
                  Top Rated
                </option>
              </select>
            </div>
            {/* PRODUCTS GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <CategoryProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VegetableCategory;