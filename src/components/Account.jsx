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

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto my-30 p-6 shadow rounded"
      >

        <h1 className="text-2xl font-bold mb-4">Account</h1>

        <input
          name="name"
          placeholder="Name"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          className="border w-full p-2 mb-3"
          onChange={handleChange}
        />

        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Login
        </button>

        <Link to="/register" className="block text-center mt-4 text-green-600">
          Don't have an account? Register
        </Link>

      </motion.div>
    </>
  );
};

export default Account;