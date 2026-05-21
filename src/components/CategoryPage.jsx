import { useParams, Link } from "react-router-dom";
import products from "../data/products";
import { motion } from "framer-motion";

const CategoryPage = () => {
  const { name } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="p-10 grid grid-cols-3 gap-6">

      {filteredProducts.map((product, index) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="border p-4 rounded-lg"
          >
            <img src={product.image} />
            <h2>{product.name}</h2>
          </motion.div>

        </Link>
      ))}

    </div>
  );
};

export default CategoryPage;