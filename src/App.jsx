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
import FlowerCategory from "./pages/FlowerCategory";
import VegetableCategory from "./pages/VegetableCategory";
import FruitsCategory from "./pages/FruitsCategory";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer 
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="light"
        style={{ zIndex: 99999 }} 
      />

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
        <Route path="/seeds/flowers" element={<FlowerCategory />} />
        <Route path="/seeds/vegetables" element={<VegetableCategory />} />
        <Route path="/seeds/fruits" element={<FruitsCategory />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* DYNAMIC ROUTES */}
        <Route path="/category/:name" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;