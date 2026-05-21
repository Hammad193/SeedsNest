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
    <section className="min-h-screen bg-gray-50 mt-24 py-20 px-6 md:px-20">

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">

        {/* ORDER SUMMARY */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold mb-6">
            Order Summary
          </h2>

          {cart.map((item) => (
            <div
              key={item.id}
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
            </div>
          ))}

          <div className="flex justify-between mt-6 text-xl font-bold">
            <span>Total</span>
            <span className="text-green-600">Rs {total}</span>
          </div>

        </div>

        {/* PAYMENT SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow-md">

          <h2 className="text-2xl font-bold mb-6">
            Payment Method
          </h2>

          <div className="space-y-4">

            <label className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer">
              <input
                type="radio"
                checked={method === "card"}
                onChange={() => setMethod("card")}
              />
              Credit / Debit Card
            </label>

            <label className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer">
              <input
                type="radio"
                checked={method === "cod"}
                onChange={() => setMethod("cod")}
              />
              Cash on Delivery
            </label>

            <label className="flex items-center gap-3 border p-3 rounded-xl cursor-pointer">
              <input
                type="radio"
                checked={method === "paypal"}
                onChange={() => setMethod("paypal")}
              />
              PayPal
            </label>

          </div>

          {/* FAKE CARD INPUT */}
          {method === "card" && (
            <div className="mt-6 space-y-3">
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
            </div>
          )}

          {/* PAY BUTTON */}
          <button
            onClick={handlePayment}
            className="mt-8 w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
          >
            Place Payment (Rs {total})
          </button>

        </div>

      </div>
    </section>
  );
}