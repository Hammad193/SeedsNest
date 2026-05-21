import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // ✅ load from localStorage
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  // ✅ save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);

      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + product.qty }
            : item
        );
      }

      return [...prevCart, product];
    });
  };

  // ✅ NEW: Quantity Plus aur Minus handle karne ke liye function
  const updateQty = (id, newQty) => {
    if (newQty < 1) return; // Quantity 1 se kam nahi honi chahiye
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, qty: newQty } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    // value ke andar updateQty ko pass kar diya hai taake Cart page isay use kar sakay
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQty }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);