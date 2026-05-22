import { motion } from "framer-motion";
import { Leaf, Users, Target, Heart, HeartOff } from "lucide-react";

export default function About() {
  return (
    <>
    <section className="py-20 px-6 md:px-20 bg-gray-50 pt-24">
      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-green-700">
          About SeedNest
        </h1>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          We are passionate about plants, seeds, and sustainable gardening solutions.
        </p>
      </motion.div>
      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <Leaf className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Our Mission</h3>
          <p className="text-gray-600 mt-2 text-sm">
            To provide high-quality seeds and plants.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <Users className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Community</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We support farmers and gardeners.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <Target className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Our Goal</h3>
          <p className="text-gray-600 mt-2 text-sm">
            Promote organic farming.
          </p>
        </div>
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <Heart className="text-green-600 mx-auto w-10 h-10" />
          <h3 className="font-semibold text-lg mt-3">Our Passion</h3>
          <p className="text-gray-600 mt-2 text-sm">
            We love nature and greenery.
          </p>
        </div>
      </div>
      {/* STORY */}
      <div className="mt-20 bg-white p-10 rounded-2xl shadow-md">
        <h2 className="text-2xl font-bold text-green-700 mb-4">
          Our Story
        </h2>
        <p className="text-gray-600 leading-7">
          SeedNest started with a simple idea to make gardening easy and accessible.
        </p>
      </div>
    </section>
    </>
  );
}