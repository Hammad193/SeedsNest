import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 m-20">

      {/* Heading */}
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT - FORM */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md"
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
            ></textarea>

          </div>
        </motion.div>

        {/* RIGHT - ORDER SUMMARY */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h3 className="text-xl font-semibold mb-6 text-gray-800">
            Order Summary
          </h3>

          <div className="space-y-4 text-sm text-gray-700">

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex justify-between"
            >
              <span>Self-Watering Plant</span>
              <span>$20.00</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex justify-between"
            >
              <span>Garden Pot</span>
              <span>$15.00</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="flex justify-between"
            >
              <span>Organic Compost</span>
              <span>$10.00</span>
            </motion.div>

            <hr />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              className="flex justify-between font-semibold text-lg text-green-700"
            >
              <span>Total</span>
              <span>$45.00</span>
            </motion.div>

          </div>

          {/* Button */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Link to="/payment">
              <button className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-all font-semibold cursor-pointer">
                Place Order
              </button>
            </Link>
          </motion.div>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Secure checkout powered by your store
          </p>

        </motion.div>

      </div>
    </section>
  );
}