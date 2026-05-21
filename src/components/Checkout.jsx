import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-10 bg-gray-50">

      {/* HEADING */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          Checkout
        </h2>
        <p className="text-gray-600 mt-2">
          Complete your order securely
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Billing Details
          </h3>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border p-3 rounded-lg outline-none focus:border-green-500"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border p-3 rounded-lg outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="w-full border p-3 rounded-lg outline-none focus:border-green-500"
            />

            <input
              type="text"
              placeholder="Address"
              className="w-full border p-3 rounded-lg outline-none focus:border-green-500"
            />

            <textarea
              placeholder="Order Notes (optional)"
              rows="4"
              className="w-full border p-3 rounded-lg outline-none focus:border-green-500"
            />

          </div>
        </motion.div>

        {/* RIGHT - ORDER SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 sm:p-8 rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Order Summary
          </h3>

          <div className="space-y-4 text-sm text-gray-700">

            {[
              { name: "Self-Watering Plant", price: "$20.00" },
              { name: "Garden Pot", price: "$15.00" },
              { name: "Organic Compost", price: "$10.00" },
            ].map((item, i) => (
              <div key={i} className="flex justify-between">
                <span>{item.name}</span>
                <span>{item.price}</span>
              </div>
            ))}

            <hr />

            <div className="flex justify-between font-semibold text-lg text-green-700">
              <span>Total</span>
              <span>$45.00</span>
            </div>

          </div>

          {/* BUTTON */}
          <div className="mt-8">
            <Link to="/payment">
              <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition font-semibold">
                Place Order
              </button>
            </Link>
          </div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Secure checkout powered by your store
          </p>

        </motion.div>

      </div>
    </section>
  );
}