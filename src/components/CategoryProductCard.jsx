import { Star, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CategoryProductCard = ({ product }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="group bg-white rounded-[10px] overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-65 object-cover group-hover:scale-110 transition duration-700"
        />
        <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
          {product.status}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-green-600 font-medium">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-gray-600">
              {product.rating}
            </span>
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-800">
          {product.name}
        </h3>
        <p className="text-gray-500 ">
          Size : {product.size}
        </p>
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-green-600">
            Rs. {product.price}
          </h2>
          <span className="text-sm text-gray-500">
            Premium Quality
          </span>
        </div>
        <button
          className="mt-2 w-full h-10 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg flex items-center justify-center gap-2 transition duration-300"
        >
          <ShoppingCart size={18} />
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default CategoryProductCard;