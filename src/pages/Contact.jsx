import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 px-6 md:px-20 m-20 bg-gray-50">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-green-700">
          Contact Us
        </h2>
        <p className="text-gray-600 mt-2">
          We are here to help you 24/7
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* LEFT INFO BOX */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-md space-y-6"
        >

          <div className="flex items-center gap-4">
            <Mail className="text-green-600" />
            <span>abc@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-green-600" />
            <span>0312 3456789</span>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-green-600" />
            <span>Model Town Lahore, Pakistan</span>
          </div>

          <p className="text-gray-600 pt-4">
            We usually respond within 24 hours. Feel free to reach out for any queries about plants, seeds, or orders.
          </p>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white p-8 rounded-2xl shadow-md space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-green-600"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-lg focus:outline-green-600"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            className="w-full border p-3 rounded-lg focus:outline-green-600"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-all duration-300 hover:scale-105"
          >
            Send Message
          </button>

        </motion.form>

      </div>
    </section>
  );
}