import { motion } from "framer-motion";
import { Leaf, Users, Target, Heart } from "lucide-react";

export default function About() {
  return (
    <section className="py-20 px-6 m-20 md:px-20 bg-gray-50">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          About SeedNest
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We are passionate about plants, seeds, and sustainable gardening solutions
          that bring nature closer to your home.
        </p>
      </motion.div>

      {/* INFO CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-md text-center"
        >
          <Leaf className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Our Mission</h3>
          <p className="text-gray-600 mt-2 text-sm">
            To provide high-quality seeds and plants for a greener world.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-md text-center"
        >
          <Users className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Community</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We support farmers, gardeners, and plant lovers across Pakistan.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-md text-center"
        >
          <Target className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Our Goal</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Promote organic farming and eco-friendly gardening solutions.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-2xl shadow-md text-center"
        >
          <Heart className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Our Passion</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We love nature and aim to bring greenery into every home.
          </p>
        </motion.div>

      </div>

      {/* STORY SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="mt-20 bg-white p-10 rounded-2xl shadow-md"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Our Story
        </h2>
        <p className="text-gray-600 leading-7">
          SeedNest started with a simple idea: to make gardening easy and accessible for everyone.
          From small home gardens to large farms, we provide quality seeds, plants, and gardening
          products that help nature thrive. Our journey is driven by passion, sustainability,
          and love for green life.
        </p>
      </motion.div>

    </section>
  );
}