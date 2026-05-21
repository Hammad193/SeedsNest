import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
   const { cart, removeFromCart, clearCart } = useCart();

  const updateQty = (id, type) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty:
                type === "inc" ? item.qty + 1 : item.qty > 1 ? item.qty - 1 : 1,
            }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50 m-20">
      <div className="lg:col-span-2">
        {cart.length === 0 ? (
          <p className="text-gray-500">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-4 mb-3 rounded-lg"
            >
              <div>
                <h2 className="font-semibold">{item.name}</h2>
                <p>Price: ${item.price}</p>
                <p>Qty: {item.qty}</p>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
              
            </div>
          ))
        )}

        {/* RIGHT SIDE */}
        <motion.div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="text-xl font-semibold mb-5">Order Summary</h3>

          <div className="flex justify-between">
            <span>Total</span>
            <span>${total}</span>
          </div>

          <Link
            to="/checkout"
            className="mt-6 block text-center bg-green-600 text-white py-3 rounded-xl"
          >
            Checkout
          </Link>
          <button
        onClick={clearCart}
        className="h-full w-full mt-6 block text-center bg-red-500 text-white py-3 rounded-xl"
      >
        Clear Cart
      </button>
        </motion.div>
      </div>
    </section>
  );
}
