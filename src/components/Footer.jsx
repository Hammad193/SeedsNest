import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-green-950 text-white pt-16 pb-8 px-6 md:px-20">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* ABOUT US */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-300 text-sm leading-relaxed">
            We provide high-quality seeds, plants, and gardening products to
            help you grow a healthy and green environment at home and farms.
          </p>
        </motion.div>
        {/* TOP CATEGORIES */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-4">Top Categories</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "Vegetable seeds",
              "Fruiting plants",
              "Garden pots",
              "Organic Compost",
              "Grow bags",
              "Pesticides",
              "Termite Treatment",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-green-400 cursor-pointer transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        {/* USEFUL LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-4">Useful Links</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            {[
              "User Dashboard",
              "Wishlist",
              "Orders",
              "Cart",
              "Checkout",
            ].map((item, i) => (
              <li
                key={i}
                className="hover:text-green-400 cursor-pointer transition-all"
              >
                {item}
              </li>
            ))}
          </ul>
        </motion.div>
        {/* CONTACT / ADDRESS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl font-bold mb-4">About Company</h2>
          <div className="text-sm text-gray-300 space-y-3 leading-relaxed">
            <p>
              <span className="text-green-400 font-semibold">Address:</span><br />
              Nursery E block opposite 89 E Model Town Lahore
            </p>
            <p>
              <span className="text-green-400 font-semibold">Phone:</span><br />
              03123456798
            </p>
            <p>
              <span className="text-green-400 font-semibold">Email:</span><br />
              abc@gmail.com
            </p>
          </div>
        </motion.div>
      </div>
      {/* Bottom bar */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} Your Website Developed by syedZada Hammad | Your Nursery Website. All rights reserved.
      </div>
    </footer>
  );
}