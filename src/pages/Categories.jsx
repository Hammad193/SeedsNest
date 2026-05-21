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

const Categories = () => {
  return (
    <section className="bg-[#f8faf8] py-14 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 pt-24">
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-14">
          <p className="text-green-600 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            Explore Categories
          </p>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mt-3">
            Shop By Category
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-5 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Discover premium gardening essentials, seeds and plants.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">

          {categories.map((category, index) => (
            <Link
              key={index}
              to={`/category/${category.name}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
            >

              {/* IMAGE */}
              <div className="overflow-hidden aspect-[4/3]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4 sm:p-5 lg:p-6 flex items-center justify-between">

                <div className="min-w-0">
                  <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 group-hover:text-green-600 transition line-clamp-1">
                    {category.name}
                  </h3>

                  <p className="text-gray-500 mt-1 text-xs sm:text-sm">
                    Explore products
                  </p>
                </div>

                <div className="w-9 h-9 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center group-hover:bg-green-600 group-hover:text-white transition flex-shrink-0">
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

export default Categories;