import React from "react";
import { Check, CalendarDays } from "lucide-react";

const SelfWateringSection = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-24"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop')",
      }}
    >

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

        {/* Content Layout */}
        <div className="flex justify-center lg:justify-end">

          {/* White Box */}
          <div className="bg-white w-full max-w-2xl rounded-[35px] shadow-2xl p-8 lg:p-12">

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
              Indoor Plants That
              <span className="text-green-600 block">
                Water Themselves
              </span>
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-lg leading-relaxed mt-6">
              Enjoy vibrant greenery without the daily hassle.
              Your plant only drinks when it's thirsty!
            </p>

            {/* Button */}
            <button className="mt-8 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg">
              SHOP SELF-WATERING PLANTS
            </button>

            {/* FAQ Link */}
            <div className="mt-5">
              <a
                href="#"
                className="text-green-600 font-semibold underline underline-offset-4 hover:text-green-700 transition"
              >
                FAQS
              </a>
            </div>

            {/* Features */}
            <div className="grid sm:grid-cols-3 gap-6 mt-10">

              {/* Item 1 */}
              <div className="border border-gray-100 rounded-2xl p-5 bg-[#f8faf8]">
                <div className="flex items-center gap-2 text-green-600 mb-3">
                  <Check className="w-5 h-5" />
                  <h3 className="font-bold text-gray-800">
                    Beginner Friendly?
                  </h3>
                </div>

                <p className="text-gray-600 font-medium">
                  Yes
                </p>
              </div>

              {/* Item 2 */}
              <div className="border border-gray-100 rounded-2xl p-5 bg-[#f8faf8]">
                <div className="flex items-center gap-2 text-green-600 mb-3">
                  <Check className="w-5 h-5" />
                  <h3 className="font-bold text-gray-800">
                    Indoor Use?
                  </h3>
                </div>

                <p className="text-gray-600 font-medium">
                  Yes
                </p>
              </div>

              {/* Item 3 */}
              <div className="border border-gray-100 rounded-2xl p-5 bg-[#f8faf8]">
                <div className="flex items-center gap-2 text-green-600 mb-3">
                  <CalendarDays className="w-5 h-5" />
                  <h3 className="font-bold text-gray-800">
                    How Long?
                  </h3>
                </div>

                <p className="text-gray-600 font-medium">
                  10-15 days
                </p>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfWateringSection;