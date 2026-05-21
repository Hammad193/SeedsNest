import { Link } from "react-router-dom";
import React from "react";
import { ArrowRight, Leaf, ShieldCheck, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-20">
      
      {/* Background Blur Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-green-200 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold animate-pulse">
              <Leaf className="w-4 h-4" />
              Trusted Organic Seed Store
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight text-gray-900">
                Grow Your
                <span className="text-green-600 block">
                  Dream Garden
                </span>
              </h1>

              <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
                Premium quality organic seeds for vegetables, flowers, herbs,
                and indoor plants. Start planting naturally with healthy and
                high-germination seeds.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
                Shop Seeds
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition duration-300" />
              </button>

              <button className="border-2 border-gray-200 hover:border-green-600 hover:text-green-600 text-gray-700 px-8 py-4 rounded-full font-semibold transition-all duration-300">
                Explore Categories
              </button>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-5 pt-6">

              <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
                <Truck className="text-green-600 w-8 h-8 mb-3" />
                <h3 className="font-bold text-gray-800">
                  Fast Delivery
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Quick nationwide shipping.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
                <Leaf className="text-green-600 w-8 h-8 mb-3" />
                <h3 className="font-bold text-gray-800">
                  Organic Seeds
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  100% natural quality seeds.
                </p>
              </div>

              <div className="bg-white border border-gray-100 shadow-md rounded-2xl p-5 hover:shadow-xl transition duration-300">
                <ShieldCheck className="text-green-600 w-8 h-8 mb-3" />
                <h3 className="font-bold text-gray-800">
                  Trusted Quality
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  High germination guarantee.
                </p>
              </div>

            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="relative flex justify-center">

            {/* Main Image */}
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?q=80&w=1200&auto=format&fit=crop"
                alt="Seeds"
                className="w-full max-w-xl rounded-[40px] shadow-2xl object-cover"
              />

              {/* Floating Card 1 */}
              <div className="absolute -top-6 -left-6 bg-white shadow-xl rounded-2xl p-4 animate-bounce">
                <p className="text-sm text-gray-500">
                  🌱 Germination Rate
                </p>
                <h3 className="text-2xl font-bold text-green-600">
                  98%
                </h3>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-2xl p-4 animate-pulse">
                <p className="text-sm text-gray-500">
                  🚚 Free Shipping
                </p>
                <h3 className="text-xl font-bold text-gray-800">
                  Orders Above Rs.3000
                </h3>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;