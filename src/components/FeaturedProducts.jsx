import React from "react";
import { ShoppingCart } from "lucide-react";

const products = [
  {
    name: "Organic Tomato Seeds",
    price: "Rs. 450",
    sale: "-20%",
    image:
      "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Indoor Snake Plant",
    price: "Rs. 1,250",
    sale: "-15%",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Garden Tool Kit",
    price: "Rs. 2,100",
    sale: "-10%",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Organic Fertilizer",
    price: "Rs. 850",
    sale: "-25%",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Sunflower Seeds",
    price: "Rs. 520",
    sale: "-18%",
    image:
      "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Aloe Vera Plant",
    price: "Rs. 980",
    sale: "-12%",
    image:
      "https://www.gardens4you.ie/media/catalog/product/cache/3a7af0a8e0e317723249dc9098669163/f/d/fd23998-0-wh.jpg",
  },
  {
    name: "Premium Plant Pots",
    price: "Rs. 1,450",
    sale: "-30%",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Neem Pest Spray",
    price: "Rs. 690",
    sale: "-14%",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Rose Flower Seeds",
    price: "Rs. 560",
    sale: "-22%",
    image:
      "https://images.unsplash.com/photo-1490750967868-88aa4486c946?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Gardening Gloves",
    price: "Rs. 750",
    sale: "-11%",
    image:
      "https://images.unsplash.com/photo-1526397751294-331021109fbd?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Indoor Palm Plant",
    price: "Rs. 1,850",
    sale: "-17%",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Organic Compost",
    price: "Rs. 1,100",
    sale: "-19%",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Mint Herb Seeds",
    price: "Rs. 430",
    sale: "-13%",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Ceramic Plant Pot",
    price: "Rs. 1,650",
    sale: "-16%",
    image:
      "https://images.unsplash.com/photo-1485955900006-10f4d324d411?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Garden Water Spray",
    price: "Rs. 890",
    sale: "-21%",
    image:
      "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Cactus Indoor Plant",
    price: "Rs. 1,350",
    sale: "-24%",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-green-600 font-semibold uppercase tracking-[4px]">
            Best Products
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
            Featured Products
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-lg">
            Discover our premium collection of seeds, plants,
            gardening essentials, and organic care products.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {products.map((product, index) => (
            <div
              key={index}
              className="group bg-white rounded-[30px] overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >

              {/* Product Image */}
              <div className="relative overflow-hidden">

                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Sale Badge */}
                <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-1 rounded-full text-sm font-semibold shadow-lg">
                  {product.sale}
                </div>

              </div>

              {/* Product Info */}
              <div className="p-6">

                <h3 className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition duration-300">
                  {product.name}
                </h3>

                <div className="flex items-center justify-between mt-5">

                  <p className="text-2xl font-extrabold text-green-600">
                    {product.price}
                  </p>

                  <button className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center hover:bg-green-600 hover:text-white transition-all duration-300 hover:scale-110">
                    <ShoppingCart className="w-5 h-5" />
                  </button>

                </div>

              </div>
            </div>
          ))}

        </div>
        {/* View All Products Button */}
<div className="flex justify-center mt-14">
  <button className="group bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-3">
    
    View All Products

    <span className="group-hover:translate-x-1 transition duration-300">
      →
    </span>

  </button>
</div>
      </div>
    </section>
  );
};

export default FeaturedProducts;