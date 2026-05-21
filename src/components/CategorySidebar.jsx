const CategorySidebar = ({
  selectedRating,
  setSelectedRating,
  selectedStock,
  setSelectedStock,
  selectedSize,
  setSelectedSize,
  selectedPrice,
  setSelectedPrice,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-md p-6 sticky top-32">

      <h2 className="text-2xl font-bold text-gray-800 mb-8">
        Filters
      </h2>

      {/* PRICE */}
      <div className="mb-8">

        <h3 className="font-semibold text-gray-700 mb-3">
          Price Range
        </h3>

        <select
          value={selectedPrice}
          onChange={(e) => setSelectedPrice(e.target.value)}
          className="w-full border rounded-xl p-3 outline-none focus:border-green-600"
        >
          <option value="">All Prices</option>
          <option value="1000">Below Rs.1000</option>
          <option value="2000">Below Rs.2000</option>
          <option value="3000">Below Rs.3000</option>
        </select>

      </div>

      {/* RATING */}
      <div className="mb-8">

        <h3 className="font-semibold text-gray-700 mb-3">
          Rating
        </h3>

        <select
          value={selectedRating}
          onChange={(e) => setSelectedRating(e.target.value)}
          className="w-full border rounded-xl p-3 outline-none focus:border-green-600"
        >
          <option value="">All Ratings</option>
          <option value="4">4+ Rating</option>
          <option value="4.5">4.5+ Rating</option>
          <option value="4.8">4.8+ Rating</option>
        </select>

      </div>

      {/* SIZE */}
      <div className="mb-8">

        <h3 className="font-semibold text-gray-700 mb-3">
          Product Size
        </h3>

        <select
          value={selectedSize}
          onChange={(e) => setSelectedSize(e.target.value)}
          className="w-full border rounded-xl p-3 outline-none focus:border-green-600"
        >
          <option value="">All Sizes</option>
          <option value="200g">200g</option>
          <option value="250g">250g</option>
          <option value="300g">300g</option>
          <option value="500g">500g</option>
        </select>

      </div>

      {/* STOCK */}
      <div>

        <h3 className="font-semibold text-gray-700 mb-3">
          Availability
        </h3>

        <select
          value={selectedStock}
          onChange={(e) => setSelectedStock(e.target.value)}
          className="w-full border rounded-xl p-3 outline-none focus:border-green-600"
        >
          <option value="">All Products</option>
          <option value="In Stock">In Stock</option>
          <option value="Organic">Organic</option>
          <option value="Premium">Premium</option>
        </select>

      </div>

    </div>
  );
};

export default CategorySidebar;