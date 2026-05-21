import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Plants",
    image:
      "https://images.unsplash.com/photo-1512428813834-c702c7702b78?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Seeds",
    image:
      "https://images.unsplash.com/photo-1457530378978-8bac673b8062?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Pest & Termite Control",
    image:
      "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Garden Accessories",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Garden Care",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop",
  },
  {
    name: "Deals & Gifts",
    image:
      "https://images.unsplash.com/photo-1513885535751-8b9238bd345a?q=80&w=1200&auto=format&fit=crop",
  },
];

const Seeds = () => {
  return (
    <section className="bg-[#f8faf8] py-16 px-4 sm:px-6 lg:px-10 pt-24">
      <div className="max-w-7xl mx-auto">
        {/* HEADING */}
        <div className="text-center mb-12">
          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Explore Seeds
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
            Seeds Collection
          </h2>
          <p className="text-gray-600 mt-5 max-w-2xl mx-auto text-base sm:text-lg">
            High quality seeds for home gardening and farming.
          </p>
        </div>
        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.name === "Seeds" ? "/shop" : "#"}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >
              {/* IMAGE */}
              <div className="overflow-hidden h-56 sm:h-64 lg:h-72">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              {/* CONTENT */}
              <div className="p-5 sm:p-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 group-hover:text-green-600">
                    {category.name}
                  </h3>
                  <p className="text-gray-500 mt-1 text-xs sm:text-sm">
                    Explore products
                  </p>
                </div>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Seeds;