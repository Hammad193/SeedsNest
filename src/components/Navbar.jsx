import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Seeds", path: "/seeds" },
    { name: "Categories", path: "/categories" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      {/* MARQUEE */}
      <div className="bg-green-600 text-white overflow-hidden whitespace-nowrap py-2">
        <div className="flex w-max animate-marquee">
          <div className="flex gap-10 px-10 text-sm font-medium">
            ✨ Lahore Offer: 20% OFF on Plants | 🎁 LHR20 | 📦 Advance Payment |
            🚚 COD Available
          </div>

          <div className="flex gap-10 px-10 text-sm font-medium">
            ✨ Lahore Offer: 20% OFF on Plants | 🎁 LHR20 | 📦 Advance Payment |
            🚚 COD Available
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed left-0 w-full z-50 transition-all duration-300  ease-in-out ${
          scrolled
            ? "top-0 bg-white/95 shadow-lg backdrop-blur-md py-3"
            : "top-10 bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 group transition-transform duration-300 hover:scale-105"
          >
            <div className="bg-green-600 p-2 rounded-full group-hover:rotate-12 transition">
              <Leaf className="text-white w-5 h-5" />
            </div>

            <h1 className="text-xl font-bold">
              Seed<span className="text-green-600">Nest</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item, i) => (
              <li key={i} className="relative group">
                <Link
                  to={item.path}
                  className="text-gray-600 font-medium hover:text-green-600 transition duration-300"
                >
                  {item.name}
                </Link>

                {/* ANIMATED LINE */}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </li>
            ))}
          </ul>

          {/* RIGHT ICONS */}
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/cart" className="relative group">
              <ShoppingCart className="text-gray-600 group-hover:text-green-600 transition" />
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                {cartCount}
              </span>
            </Link>

            <Link to="/account">
              <User className="text-gray-600 hover:text-green-600 transition" />
            </Link>

            <Link
              to="/shop"
              className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition duration-300 hover:scale-105 shadow-md"
            >
              Shop Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden transition"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU (ANIMATED) */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100 mt-5" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white shadow-md rounded-xl mx-6 p-5">
            <ul className="flex flex-col gap-4">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-green-600 transition"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-3 mt-5">
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-green-600 text-white py-3 text-center rounded-full hover:bg-green-700 transition"
              >
                Shop Now
              </Link>

              <Link to="/cart" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="text-gray-600 mt-3" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
