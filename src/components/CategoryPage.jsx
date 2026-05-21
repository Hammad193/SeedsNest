import { useParams, Link } from "react-router-dom";
import products from "../data/products";

const CategoryPage = () => {
  const { name } = useParams();

  const filteredProducts = products.filter(
    (item) => item.category.toLowerCase() === name.toLowerCase()
  );

  return (
    <div className="p-10 grid grid-cols-3 gap-6">

      {filteredProducts.map((product) => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="border p-4 rounded-lg">
            <img src={product.image} />
            <h2>{product.name}</h2>
          </div>
        </Link>
      ))}

    </div>
  );
};

export default CategoryPage;