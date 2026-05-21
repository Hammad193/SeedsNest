import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  Heart,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Truck,
  Leaf,
  MessageCircle,
} from "lucide-react";

import { useCart } from "../context/CartContext";

import {
  fruitsProducts,
  vegetableProducts,
  flowerProducts,
} from "../data/categoryProducts";

import products from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();

  const allProducts = [
    ...(products || []),
    ...(fruitsProducts || []),
    ...(vegetableProducts || []),
    ...(flowerProducts || []),
  ];

  const product = allProducts.find((p) => p.id === Number(id));

  const { addToCart } = useCart();

  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState("");
  const scrollRef = useRef();

  if (!product) {
    return (
      <div className="pt-40 text-center text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  // images normalize
  const images = Array.isArray(product.image)
    ? product.image.filter(Boolean)
    : [product.image].filter(Boolean);

  // default size safe init
  const defaultSize = product?.sizes?.[0]?.size || "Small";

  const [selectedSize, setSelectedSize] = useState(defaultSize);

  // review form
  const [reviews, setReviews] = useState([
    {
      name: "Ali Khan",
      review:
        "Amazing quality product. Packaging was excellent and plant health was perfect.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  ]);

  const [reviewForm, setReviewForm] = useState({
    name: "",
    review: "",
    image: "",
    rating: 5,
  });

  // reset size when product changes
  useEffect(() => {
    setSelectedSize(defaultSize);
  }, [product]);

  useEffect(() => {
    if (images.length > 0) {
      setActiveImg(images[0]);
    }
  }, [product]);

  // get selected size data
  const selectedSizeData = product.sizes?.find((s) => s.size === selectedSize);

  const currentPrice = selectedSizeData?.price || product.price;
  const currentWeight = selectedSizeData?.weight || product.weight;

  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id,
  );

  const handleAddToCart = () => {
    addToCart({
      ...product,
      qty,
      size: selectedSize,
      price: currentPrice,
      weight: currentWeight,
    });
  };

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  // submit review
  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      ...reviewForm,
      image:
        reviewForm.image ||
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    };

    setReviews([newReview, ...reviews]);

    setReviewForm({
      name: "",
      review: "",
      image: "",
      rating: 5,
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* LEFT IMAGES */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl shadow-sm p-4 overflow-hidden">
              {activeImg && (
                <img
                  src={activeImg}
                  alt={product.name}
                  className="w-full h-[450px] object-cover rounded-2xl hover:scale-105 transition duration-500 cursor-pointer"
                />
              )}
            </div>

            {/* THUMBNAILS */}
            <div className="flex gap-3 mt-4 overflow-x-auto">
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setActiveImg(img)}
                  className={`w-20 h-20 object-cover rounded-xl cursor-pointer border-2 transition ${
                    activeImg === img ? "border-green-600" : "border-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <Truck className="mx-auto text-green-600 mb-2" />
                <p className="text-xs font-medium">Fast Delivery</p>
              </div>

              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <ShieldCheck className="mx-auto text-green-600 mb-2" />
                <p className="text-xs font-medium">Safe Packing</p>
              </div>

              <div className="bg-white rounded-2xl p-4 text-center shadow-sm">
                <Leaf className="mx-auto text-green-600 mb-2" />
                <p className="text-xs font-medium">Organic Quality</p>
              </div>
            </div>
          </div>

          {/* CENTER */}
          <div className="lg:col-span-5">
            {/* BREADCRUMB */}
            <div className="text-sm text-green-700 mb-6">
              Home / Seeds / {product.category} / {product.name}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-2 mt-4">
              <Star className="text-yellow-400 fill-yellow-400" />
              <span className="font-medium">{product.rating}</span>
              <span className="text-gray-400 text-sm">(120 Reviews)</span>
            </div>

            {/* SIZE SELECTOR */}
            <div className="flex flex-wrap gap-3 mt-6">
              {product.sizes?.map((s, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedSize(s.size)}
                  className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                    selectedSize === s.size
                      ? "bg-green-600 text-white border-green-600"
                      : "bg-white hover:border-green-500"
                  }`}
                >
                  {s.size}
                </button>
              ))}
            </div>

            <h2 className="text-4xl text-green-600 font-bold mt-6">
              Rs {currentPrice}
            </h2>

            {/* WEIGHT */}
            <div className="mt-3 text-gray-600 text-sm">
              Weight: {currentWeight}
            </div>

            <span className="text-xs px-4 py-2 bg-blue-100 text-blue-700 rounded-full inline-block mt-4">
              {product.status}
            </span>

            {/* QTY */}
            <div className="flex items-center gap-4 mt-8">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="p-3 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-300 transition"
              >
                <Minus />
              </button>

              <span className="text-2xl font-semibold">{qty}</span>

              <button
                onClick={() => setQty(qty + 1)}
                className="p-3 bg-gray-200 rounded-xl cursor-pointer hover:bg-gray-300 transition"
              >
                <Plus />
              </button>
            </div>

            {/* BUTTONS */}
            <div className="mt-8 space-y-4">
              <button
                onClick={handleAddToCart}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-4 rounded-full flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer font-medium"
              >
                <ShoppingCart size={20} />
                Add To Cart
              </button>

              <button className="w-full border bg-white py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gray-50 transition-all duration-300 cursor-pointer font-medium">
                <Heart size={20} />
                Wishlist
              </button>
            </div>

            {/* DESCRIPTION */}
            <div className="mt-8 bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Product Description
              </h3>

              <p className="text-gray-600 leading-8">
                This premium quality {product.name} is carefully selected for
                healthy growth, better production, and long-lasting freshness.
                It is perfect for home gardening, indoor decoration, kitchen
                farming, and organic cultivation. The product is packed safely
                to maintain freshness and quality during delivery.
              </p>
            </div>

            {/* ADVANTAGES */}
            <div className="mt-6 bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Advantages</h3>

              <ul className="space-y-3 text-gray-600">
                <li>✔ High germination and healthy growth</li>
                <li>✔ Suitable for indoor & outdoor gardening</li>
                <li>✔ Organic and eco-friendly</li>
                <li>✔ Easy maintenance for beginners</li>
                <li>✔ Better production and long life</li>
              </ul>
            </div>

            {/* DISADVANTAGES */}
            <div className="mt-6 bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Disadvantages</h3>

              <ul className="space-y-3 text-gray-600">
                <li>✖ Needs proper sunlight for best growth</li>
                <li>✖ Overwatering may damage roots</li>
                <li>✖ Seasonal care may be required</li>
              </ul>
            </div>

            {/* PLANT CARE */}
            <div className="mt-6 bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">
                Plant Care Instructions
              </h3>

              <ul className="space-y-4 text-gray-600 leading-7">
                <li>🌱 Water the plant regularly but avoid overwatering.</li>

                <li>
                  ☀ Keep the plant in indirect sunlight for healthy growth.
                </li>

                <li>
                  🪴 Use organic fertilizer every 15 days for better results.
                </li>

                <li>💧 Ensure proper drainage to protect roots from rot.</li>

                <li>🍃 Remove dry leaves regularly to maintain freshness.</li>
              </ul>
            </div>
          </div>
          {/* RIGHT SIDE */}
          <div className="lg:col-span-3">
            {/* BUY BOX */}
            <div className="bg-white p-6 rounded-3xl shadow-sm sticky top-32">
              <h2 className="text-2xl font-bold">Buy Now</h2>

              <p className="text-sm text-gray-500 mt-3 leading-6">
                Fast delivery, premium packaging and Cash on Delivery available
                across Pakistan.
              </p>

              <button className="mt-6 w-full bg-black hover:bg-gray-800 text-white py-4 rounded-full cursor-pointer transition-all duration-300">
                Buy Now
              </button>

              <div className="border-t mt-6 pt-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <MessageCircle size={18} />
                  Add Review
                </h3>

                {/* REVIEW FORM */}
                <form onSubmit={handleReviewSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required
                    value={reviewForm.name}
                    onChange={(e) =>
                      setReviewForm({
                        ...reviewForm,
                        name: e.target.value,
                      })
                    }
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
                  />

                  <input
                    type="text"
                    placeholder="Your Image URL"
                    value={reviewForm.image}
                    onChange={(e) =>
                      setReviewForm({
                        ...reviewForm,
                        image: e.target.value,
                      })
                    }
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
                  />

                  <select
                    value={reviewForm.rating}
                    onChange={(e) =>
                      setReviewForm({
                        ...reviewForm,
                        rating: e.target.value,
                      })
                    }
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600"
                  >
                    <option value="5">5 Star</option>
                    <option value="4">4 Star</option>
                    <option value="3">3 Star</option>
                    <option value="2">2 Star</option>
                    <option value="1">1 Star</option>
                  </select>

                  <textarea
                    rows="4"
                    required
                    placeholder="Write your review..."
                    value={reviewForm.review}
                    onChange={(e) =>
                      setReviewForm({
                        ...reviewForm,
                        review: e.target.value,
                      })
                    }
                    className="w-full border rounded-xl px-4 py-3 outline-none focus:border-green-600 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl transition-all duration-300"
                  >
                    Submit Review
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* CUSTOMER REVIEWS */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-8">Customer Reviews</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((item, index) => (
              <div key={index} className="bg-white rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />

                  <div>
                    <h3 className="font-semibold text-lg">{item.name}</h3>

                    <div className="flex">
                      {[...Array(Number(item.rating))].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className="text-yellow-400 fill-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-7 mt-5">{item.review}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RELATED */}
      <div className="max-w-7xl mx-auto px-4 mt-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Related Products</h2>

          <div className="flex gap-2">
            <button
              onClick={scrollLeft}
              className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={scrollRight}
              className="p-3 bg-white shadow rounded-full hover:bg-gray-100 transition"
            >
              <ChevronRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {relatedProducts.map((item) => (
            <Link to={`/product/${item.id}`} key={item.id}>
              <div className="min-w-[240px] bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <img
                  src={Array.isArray(item.image) ? item.image[0] : item.image}
                  alt={item.name}
                  className="h-52 w-full object-cover"
                />

                <div className="p-4">
                  <h3 className="text-base font-semibold text-gray-800">
                    {item.name}
                  </h3>

                  <p className="text-green-600 font-bold mt-2">
                    Rs {item.price}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
