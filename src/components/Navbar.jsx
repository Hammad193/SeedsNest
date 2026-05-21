import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf, ShoppingCart, User } from "lucide-react";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);

  const { cart } = useCart();
  const cartCount = cart.reduce((acc, item) => acc + item.qty, 0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);
      setShowTopBar(scrollY < 10);
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
      <div className="relative w-full bg-green-600 text-white overflow-hidden whitespace-nowrap py-2 z-40">
        <div className="flex w-max">
          <div className="flex gap-10 px-10 text-sm font-medium">
            ✨ Lahore Offer: 20% OFF on Plants | 🎁 LHR20 | 📦 Advance Payment | 🚚 COD Available
          </div>
          <div className="flex gap-10 px-10 text-sm font-medium">
            ✨ Lahore Offer: 20% OFF on Plants | 🎁 LHR20 | 📦 Advance Payment | 🚚 COD Available
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav
        className={`fixed left-0 w-full z-[9999] transition-all duration-300 ${
          scrolled || !showTopBar
            ? "top-0 bg-white/95 shadow-lg backdrop-blur-md py-3"
            : "top-10 bg-white py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-green-600 p-2 rounded-full">
              <Leaf className="text-white w-5 h-5" />
            </div>
            <h1 className="text-lg font-bold">
              Seed<span className="text-green-600">Nest</span>
            </h1>
          </Link>

          {/* DESKTOP MENU */}
          <ul className="hidden lg:flex items-center gap-10">
            {navLinks.map((item, i) => (
              <li key={i}>
                <Link className="text-gray-600 hover:text-green-600" to={item.path}>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* DESKTOP RIGHT */}
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/cart" className="relative">
              <ShoppingCart className="text-gray-600 w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-2 rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>

            <Link to="/account">
              <User className="text-gray-600 w-6 h-6" />
            </Link>

            <Link
              to="/shop"
              className="bg-green-600 text-white px-4 py-2 rounded-full"
            >
              Shop Now
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="lg:hidden w-10 h-10 flex items-center justify-center z-[99999]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU FIXED */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? "max-h-[500px] opacity-100 mt-3" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white shadow-md rounded-xl mx-4 p-5">

            {/* LINKS */}
            <ul className="flex flex-col gap-4">
              {navLinks.map((item, i) => (
                <li key={i}>
                  <Link
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className="block text-gray-600 hover:text-green-600 py-2"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* FIXED BUTTONS */}
            <div className="flex gap-3 mt-5">

              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="flex-1 bg-green-600 text-white py-3 text-center rounded-full"
              >
                Shop Now
              </Link>

              <Link
                to="/cart"
                onClick={() => setIsOpen(false)}
                className="relative flex items-center justify-center px-4 border rounded-full"
              >
                <ShoppingCart className="text-gray-600 w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-green-600 text-white text-xs px-1.5 rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

            </div>

          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;