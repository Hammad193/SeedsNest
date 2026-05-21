import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Ayesha Khan",
    review:
      "Amazing plants! My home feels so fresh now. Self-watering feature is a game changer.",
    role: "Customer",
  },
  {
    id: 2,
    name: "Ali Raza",
    review:
      "Great quality products and fast delivery. Highly recommended for plant lovers.",
    role: "Verified Buyer",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    review:
      "Very easy to maintain plants. I don’t worry about watering anymore!",
    role: "Customer",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6 md:px-20 bg-white">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-green-800">
          What Our Customers Say
        </h2>
        <p className="text-gray-600 mt-2">
          Real feedback from happy plant lovers
        </p>
      </div>

      {/* Animated Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {testimonials.map((item, index) => (
          <motion.div
            key={item.id}
            
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}

            whileHover={{ scale: 1.05 }}
            className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100"
          >

            {/* Quote */}
            <p className="text-gray-600 italic">
              "{item.review}"
            </p>

            {/* Name */}
            <h3 className="mt-6 font-semibold text-green-800">
              {item.name}
            </h3>

            <span className="text-sm text-gray-500">
              {item.role}
            </span>

          </motion.div>
        ))}

      </div>
    </section>
  );
}