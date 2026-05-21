import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { name } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 m-20">
      
      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {filteredProducts.map((product, index) => (
          <Link to={`/product/${product.id}`} key={product.id}>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray-100 h-95 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              {/* IMAGE */}
              <div className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* CONTENT */}
              <div className="p-4">
                <h2 className="text-sm sm:text-base font-semibold text-gray-800 line-clamp-1">
                  {product.name}
                </h2>
              </div>

            </motion.div>

          </Link>
        ))}

      </div>
    </div>
  );
};

export default CategoryPage;