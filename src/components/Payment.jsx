import { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

export default function Payment() {
  const { cart, clearCart } = useCart();

  const [method, setMethod] = useState("card");
  const [paid, setPaid] = useState(false);

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  const handlePayment = () => {
    setPaid(true);
    clearCart();
  };

  if (paid) {
    return (
      <div className="h-screen flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-10 rounded-2xl shadow-lg text-center"
        >
          <h1 className="text-3xl font-bold text-green-600">
            Payment Successful 🎉
          </h1>
          <p className="text-gray-600 mt-3">
            Your order has been placed successfully!
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen bg-gray-50 mt-24 py-20 px-6 md:px-20"
    >

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ORDER SUMMARY */}
        <motion.div
          initial={{ x: -40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="flex justify-between border-b py-3"
            >
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Qty: {item.qty}
                </p>
              </div>

              <p className="font-bold text-green-600">
                Rs {item.price * item.qty}
              </p>
            </motion.div>
          ))}

          <div className="flex justify-between mt-6 text-xl font-bold">
            <span>Total</span>
            <span className="text-green-600">Rs {total}</span>
          </div>
        </motion.div>

        {/* PAYMENT SECTION */}
        <motion.div
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-6 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-bold mb-6">
            Payment Method
          </h2>

          <div className="space-y-4">

            <motion.label
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer"
            >
              <input
                type="radio"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              Credit / Debit Card
            </motion.label>

            <motion.label
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer"
            >
              <input
                type="radio"
                checked={method === "cod"}
                onChange={() => setMethod("cod")}
              />
              Cash on Delivery
            </motion.label>

            <motion.label
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer"
            >
              <input
                type="radio"
                checked={method === "paypal"}
                onChange={() => setMethod("paypal")}
              />
              PayPal
            </motion.label>

          </div>

          {method === "card" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.4 }}
              className="mt-6 space-y-3"
            >
              <input
                placeholder="Card Number"
                className="w-full border p-3 rounded-xl"
              />
              <input
                placeholder="Card Holder Name"
                className="w-full border p-3 rounded-xl"
              />
              <div className="flex gap-3">
                <input
                  placeholder="MM/YY"
                  className="w-1/2 border p-3 rounded-xl"
                />
                <input
                  placeholder="CVV"
                  className="w-1/2 border p-3 rounded-xl"
                />
              </div>
            </motion.div>
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={handlePayment}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Place Payment (Rs {total})
          </motion.button>

        </motion.div>

      </div>
    </motion.section>
  );
}