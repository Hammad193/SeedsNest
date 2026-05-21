import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Seeds from "./pages/Seeds";
import CategoryPage from "./components/CategoryPage";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import Account from "./components/Account";
import Shop from "./components/Shop";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (<>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/seeds" element={<Seeds />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/account" element={<Account />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />

      {/* DYNAMIC ROUTES */}
      <Route path="/category/:name" element={<CategoryPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;