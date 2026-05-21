import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Account = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Data Submit:", user);
    // یہاں لاگ ان لاجک آئے گی
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center pt-24 pb-16 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
      >
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-slate-800 text-center mb-6">
          Account Login
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-600 bg-gray-50 transition"
              onChange={handleChange}
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-1.5">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-600 bg-gray-50 transition"
              onChange={handleChange}
            />
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-semibold py-3 rounded-xl transition-all duration-200 shadow-sm mt-2 cursor-pointer"
          >
            Login
          </button>
        </form>

        {/* Register Link (Bilkul center aur clickable) */}
        <div className="mt-6 text-center">
          <Link
            to="/register"
            className="text-xs font-bold text-green-600 hover:text-green-700 hover:underline transition-all uppercase tracking-wider inline-block"
          >
            Don't have an account? Register
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Account;