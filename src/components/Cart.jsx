import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="py-20 px-4 sm:px-6 md:px-20 bg-gray-50 pt-24">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">

        {/* LEFT - CART ITEMS */}
        <div className="lg:col-span-2">

          {cart.length === 0 ? (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 text-center"
            >
              Cart is empty
            </motion.p>
          ) : (
            cart.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex flex-col sm:flex-row justify-between sm:items-center border p-4 mb-4 rounded-lg bg-white"
              >

                {/* ITEM INFO */}
                <div>
                  <h2 className="font-semibold text-gray-800">{item.name}</h2>
                  <p className="text-gray-600">Price: ${item.price}</p>
                  <p className="text-gray-600">Qty: {item.qty}</p>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 mt-3 sm:mt-0"
                >
                  Remove
                </button>

              </motion.div>
            ))
          )}

        </div>

        {/* RIGHT - SUMMARY */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="bg-white p-6 rounded-xl shadow-md h-fit"
        >
          <h3 className="text-xl font-semibold mb-5">
            Order Summary
          </h3>

          <div className="flex justify-between text-gray-700">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <div className="mt-6 flex flex-col gap-3">

            <Link
              to="/checkout"
              className="w-full text-center bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition"
            >
              Checkout
            </Link>

            <button
              onClick={clearCart}
              className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl transition"
            >
              Clear Cart
            </button>

          </div>
        </motion.div>

      </div>
    </section>
  );
}