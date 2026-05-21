import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  Star,
  Minus,
  Plus,
  ShoppingCart,
  ShieldCheck,
  Truck,
  Leaf,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
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

  // images normalize
  const images = Array.isArray(product?.image)
    ? product.image.filter(Boolean)
    : [product?.image].filter(Boolean);

  // default size safe init
  const defaultSize = product?.sizes?.[0]?.size || "Small";
  const [selectedSize, setSelectedSize] = useState(defaultSize);

  // review form state
  const [reviews, setReviews] = useState([
    {
      name: "Ali Khan",
      review: "Amazing quality product. Packaging was excellent and plant health was perfect.",
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
  }, [product, defaultSize]);

  useEffect(() => {
    if (images.length > 0) {
      setActiveImg(images[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="pt-40 text-center text-xl font-semibold">
        Product Not Found
      </div>
    );
  }

  // get selected size data dynamically for live updates
  const selectedSizeData = product.sizes?.find((s) => s.size === selectedSize);
  const currentPrice = selectedSizeData?.price || product.price;
  const currentWeight = selectedSizeData?.weight || product.weight;

  const relatedProducts = allProducts.filter(
    (p) => p.category === product.category && p.id !== product.id
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

  const handleReviewSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      ...reviewForm,
      image: reviewForm.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
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
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* ======================================================= */}
        {/* UPPER SECTION: IMAGE LAYOUT & DETAILED INFO             */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-3xl shadow-sm">
          
          {/* LEFT: RESPONSIVE THUMBNAILS & ACTIVE IMAGE DISPLAY */}
          <div className="flex flex-col-reverse md:flex-row gap-4 w-full">
            {/* Vertical/Horizontal Thumbnails */}
            <div className="flex flex-row md:flex-col gap-3 flex-shrink-0 overflow-x-auto md:overflow-y-auto max-w-full pb-2 md:pb-0" style={{ scrollbarWidth: "none" }}>
              {images.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setActiveImg(img)}
                  className={`w-16 h-16 md:w-20 md:h-20 object-cover cursor-pointer border-2 transition flex-shrink-0 rounded-md ${
                    activeImg === img ? "border-green-600 shadow-sm" : "border-gray-200"
                  }`}
                />
              ))}
            </div>

            {/* Main Image container */}
            <div className="flex-1 bg-gray-50 overflow-hidden min-h-[300px] max-h-[500px] flex items-center justify-center border border-gray-100 rounded-2xl">
              {activeImg && (
                <img
                  src={activeImg}
                  alt={product.name}
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                />
              )}
            </div>
          </div>

          {/* RIGHT: CLEAN RETAIL LAYOUT WITH FUNCTIONAL SIZES */}
          <div className="flex flex-col">
            {/* Breadcrumb Navigation */}
            <div className="text-[11px] uppercase tracking-wider text-gray-500 font-semibold mb-3 flex flex-wrap items-center gap-1">
              <span className="text-green-600 hover:underline cursor-pointer">Home</span> / 
              <span className="text-green-600 hover:underline cursor-pointer">Shop</span> / 
              <span className="text-green-600 hover:underline cursor-pointer">Seeds</span> / 
              <span className="text-green-600 hover:underline cursor-pointer">Vegetable Seeds</span> / 
              <span className="text-gray-800 font-bold">{product.name}</span>
            </div>

            {/* Product Title */}
            <h1 className="text-3xl font-extrabold text-slate-800 mb-2">
              {product.name}
            </h1>

            {/* Dynamic Price Section (Changes based on size) */}
            <div className="text-2xl font-bold text-slate-900 mb-2">
              Rs {currentPrice}
            </div>

            {/* Dynamic Weight Section */}
            <div className="text-xs text-gray-500 font-medium mb-6">
              Weight: <span className="text-gray-800 font-bold">{currentWeight}</span>
            </div>

            {/* DYNAMIC SIZES SELECTOR (Lines Removed from here) */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <span className="text-xs font-bold text-gray-700 uppercase tracking-wider block mb-2.5">
                  Select Pack Size:
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {product.sizes.map((s, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setSelectedSize(s.size)}
                      className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all duration-200 ${
                        selectedSize === s.size
                          ? "bg-green-600 text-white border-green-600 shadow-sm"
                          : "bg-gray-50 hover:bg-gray-100 text-gray-700 border-gray-200"
                      }`}
                    >
                      {s.size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Bullet Specifications (Lines Removed from here) */}
            <ul className="space-y-2.5 text-xs text-slate-600 font-bold tracking-wide mb-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
                HIGH QUALITY SEEDS
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
                GERMINATION RATE = 80-85%
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
                PRODUCT CODE : {String(product.id).padStart(3, '0')}
              </li>
            </ul>

            {/* Actions: Quantity box and Button (Borders strictly here: top and bottom) */}
            <div className="flex items-center gap-4 py-6 border-t border-b border-gray-200 mb-6">
              {/* Custom Quantity box */}
              <div className="flex items-center border border-gray-300 rounded-lg px-2 py-1.5 bg-gray-50">
                <button
                  onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                  className="p-1 text-gray-500 hover:text-black transition"
                >
                  <Minus size={14} />
                </button>
                <span className="w-8 text-center font-bold text-gray-800 text-sm">{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="p-1 text-gray-500 hover:text-black transition"
                >
                  <Plus size={14} />
                </button>
              </div>

              {/* Add To Cart Button */}
              <button
                onClick={handleAddToCart}
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-8 py-2.5 rounded-lg transition-all duration-200 shadow-sm"
              >
                Add To Cart
              </button>
            </div>

            {/* Under-button Meta info */}
            <div className="text-xs text-gray-500 space-y-1">
              <div><strong className="text-gray-700">SKU:</strong> {String(product.id).padStart(3, '0')}</div>
              <div><strong className="text-gray-700">CATEGORIES:</strong> {product.category?.toUpperCase() || "VEGETABLE SEEDS"}</div>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* MIDDLE SECTION: DESCRIPTIONS, ADVANTAGES & SIDEBAR       */}
        {/* ======================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mt-12">
          
          {/* MIDDLE LEFT CONTENT */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* SCREENSHOT PATTERN SPECIFICATION */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border-t-2 border-gray-100">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Description
              </span>
              <h2 className="text-sm font-extrabold text-slate-800 uppercase italic mb-4">
                {product.name} DESI SEEDS SPECIFICATIONS
              </h2>
              <ul className="space-y-2.5 text-xs text-slate-600 font-bold tracking-wide">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
                  CURRENT SELECTED PACK: {selectedSize.toUpperCase()} ({currentWeight})
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
                  GERMINATION RATE = 80-85%
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-slate-800 rounded-full"></span>
                  PRODUCT CODE : {String(product.id).padStart(3, '0')}
                </li>
              </ul>
            </div>

            {/* EXTENDED DESCRIPTION */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Product Overview</h3>
              <p className="text-gray-600 leading-8 text-sm">
                This premium quality {product.name} is carefully selected for healthy growth, 
                better production, and long-lasting freshness. It is perfect for home gardening, 
                indoor decoration, kitchen farming, and organic cultivation.
              </p>
            </div>

            {/* ADVANTAGES & DISADVANTAGES */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-slate-800">Advantages</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>✔ High germination and healthy growth</li>
                  <li>✔ Suitable for indoor & outdoor gardening</li>
                  <li>✔ Organic and eco-friendly</li>
                  <li>✔ Easy maintenance for beginners</li>
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4 text-slate-800">Disadvantages</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li>✖ Needs proper sunlight for best growth</li>
                  <li>✖ Overwatering may damage roots</li>
                  <li>✖ Seasonal care may be required</li>
                </ul>
              </div>
            </div>

            {/* PLANT CARE */}
            <div className="bg-white rounded-3xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-slate-800">Plant Care Instructions</h3>
              <ul className="space-y-3 text-sm text-gray-600 leading-7">
                <li>🌱 Water the plant regularly but avoid overwatering.</li>
                <li>☀ Keep the plant in indirect sunlight for healthy growth.</li>
                <li>🪴 Use organic fertilizer every 15 days for better results.</li>
                <li>💧 Ensure proper drainage to protect roots from rot.</li>
              </ul>
            </div>
          </div>

          {/* MIDDLE RIGHT SIDEBAR (Badges & Add Review Form) */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Badge Features */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
                <Truck className="mx-auto text-green-600 mb-1" size={20} />
                <p className="text-[10px] font-semibold text-gray-700">Fast Delivery</p>
              </div>
              <div className="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
                <ShieldCheck className="mx-auto text-green-600 mb-1" size={20} />
                <p className="text-[10px] font-semibold text-gray-700">Safe Packing</p>
              </div>
              <div className="bg-white rounded-2xl p-3 text-center shadow-sm border border-gray-100">
                <Leaf className="mx-auto text-green-600 mb-1" size={20} />
                <p className="text-[10px] font-semibold text-gray-700">Organic Quality</p>
              </div>
            </div>

            {/* REVIEW FORM */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-28">
              <h3 className="text-md font-semibold flex items-center gap-2 mb-4 text-gray-800">
                <MessageCircle size={18} className="text-green-600" />
                Add a Review
              </h3>

              <form onSubmit={handleReviewSubmit} className="space-y-3.5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  value={reviewForm.name}
                  onChange={(e) => setReviewForm({ ...reviewForm, name: e.target.value })}
                  className="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-600 bg-gray-50"
                />

                <textarea
                  rows="3"
                  required
                  placeholder="Write your detailed review..."
                  value={reviewForm.review}
                  onChange={(e) => setReviewForm({ ...reviewForm, review: e.target.value })}
                  className="w-full border rounded-xl px-4 py-2.5 text-sm outline-none focus:border-green-600 bg-gray-50 resize-none"
                />

                <button
                  type="submit"
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm py-2.5 rounded-xl font-medium transition"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ======================================================= */}
        {/* LOWER SECTION: REVIEWS BOARD & RELATED PRODUCTS         */}
        {/* ======================================================= */}
        
        {/* CUSTOMER REVIEWS */}
        <div className="mt-16 bg-white p-8 rounded-3xl shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Customer Reviews</h2>
            <div className="flex items-center gap-1 text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full font-medium">
              <Star size={14} className="text-yellow-400 fill-yellow-400" />
              <span>{product.rating || "5"} ({reviews.length} Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl p-5 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border border-gray-200"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800 text-sm">{item.name}</h4>
                      <div className="flex mt-0.5">
                        {[...Array(Number(item.rating))].map((_, i) => (
                          <Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs leading-6 mt-4 italic">"{item.review}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RELATED PRODUCTS */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-slate-800">Related Products</h2>

              <div className="flex gap-2">
                <button
                  onClick={scrollLeft}
                  className="p-2.5 bg-white shadow-sm border rounded-full hover:bg-gray-50 text-gray-700 transition"
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  onClick={scrollRight}
                  className="p-2.5 bg-white shadow-sm border rounded-full hover:bg-gray-50 text-gray-700 transition"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            <div
              ref={scrollRef}
              className="flex gap-6 overflow-x-auto scroll-smooth pb-4 snap-x hide-scrollbar"
              style={{ scrollbarWidth: "none" }}
            >
              {relatedProducts.map((item) => (
                <div
                  key={item.id}
                  className="min-w-[240px] max-w-[240px] bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 relative snap-start group"
                >
                  <Link to={`/product/${item.id}`}>
                    <div className="h-48 w-full overflow-hidden bg-gray-50">
                      <img
                        src={Array.isArray(item.image) ? item.image[0] : item.image}
                        alt={item.name}
                        className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>

                  <div className="p-4">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">
                        {item.name}
                      </h3>
                    </Link>
                    
                    {/* Price and Cart Button Section (Flex Container) */}
                    <div className="flex items-center justify-between mt-2.5">
                      <p className="text-green-600 font-bold text-sm">
                        Rs {item.price}
                      </p>
                      
                      <button
                        onClick={() => addToCart({ ...item, qty: 1 })}
                        className="bg-gray-50 text-gray-600 hover:bg-green-600 hover:text-white transition w-8 h-8 rounded-full flex items-center justify-center border border-gray-100 shadow-sm"
                      >
                        <ShoppingCart size={13} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductDetail;