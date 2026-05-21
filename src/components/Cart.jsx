import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateQty } = useCart();

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingCost = 200;
  const total = subtotal + shippingCost;
  const handleQuantityChange = (item, newQty) => {
    if (newQty < 1) return;
    
    if (updateQty) {
      updateQty(item.id, newQty);
      const itemNameWithDetails = item.size ? `${item.name} (${item.size})` : item.name;

      if (newQty > item.qty) {
        //adding
        toast.success(`Increased ${itemNameWithDetails} quantity to ${newQty}! 📦`, {
          position: "top-right",
          autoClose: 1500, // Fast dismiss taake user continuous click kar sakay
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
      } else if (newQty < item.qty) {
        // minus
        toast.info(`Decreased ${itemNameWithDetails} quantity to ${newQty}! 🔽`, {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: false,
          theme: "light",
        });
      }
    } else {
      console.log(`Update item ${item.id} quantity to ${newQty}`);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-20 bg-white pt-24 font-sans text-gray-800">
      <ToastContainer className="mt-20" />
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 border border-black bg-[#fcfcfc] px-6 py-4 rounded-sm flex items-center gap-3 text-[15px]">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span>Customer matched zone "Pakistan"</span>
        </div>
        <h1 className="text-3xl font-bold mb-8 text-[#11385b]">Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            {cart.length === 0 ? (
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-gray-500 text-center py-10">
                Cart is empty
              </motion.p>
            ) : (
              <div>
                {/* TABLE HEADERS */}
                <div className="grid grid-cols-12 pb-3 border-b text-sm font-semibold text-gray-700 uppercase tracking-wider hidden sm:grid">
                  <div className="col-span-6">Product</div>
                  <div className="col-span-3 text-center">Quantity</div>
                  <div className="col-span-3 text-right pr-8">Subtotal</div>
                </div>

                {/* ITEMS LIST */}
                {cart.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="grid grid-cols-1 sm:grid-cols-12 items-center py-6 border-b gap-4 sm:gap-0"
                  >
                    {/* PRODUCT INFO WITH IMAGE */}
                    <div className="col-span-1 sm:col-span-6 flex items-center gap-4">
                      <img 
                        src={item.image || "https://via.placeholder.com/70"} 
                        alt={item.name} 
                        className="w-16 h-16 object-cover rounded border"
                      />
                      <div>
                        <h2 className="font-medium text-[#2c5375] text-[16px] hover:underline cursor-pointer">
                          {item.name}
                        </h2>
                        <p className="text-sm text-gray-500 mt-1">Rs {item.price}</p>
                        {item.size && <p className="text-xs text-gray-400">Size: {item.size}</p>}
                        {item.weight && <p className="text-xs text-gray-400">Weight: {item.weight}</p>}
                      </div>
                    </div>

                    {/* QUANTITY COUNTER */}
                    <div className="col-span-1 sm:col-span-3 flex justify-start sm:justify-center">
                      <div className="flex items-center border border-green-500 rounded-full px-3 py-1 bg-white">
                        <button 
                          onClick={() => handleQuantityChange(item, item.qty - 1)}
                          className="text-gray-500 hover:text-black px-2 text-lg focus:outline-none cursor-pointer"
                        >
                          −
                        </button>
                        <span className="mx-3 font-semibold text-sm w-4 text-center">{item.qty}</span>
                        <button 
                          onClick={() => handleQuantityChange(item, item.qty + 1)}
                          className="text-gray-500 hover:text-black px-2 text-lg focus:outline-none cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* SUBTOTAL & REMOVE */}
                    <div className="col-span-1 sm:col-span-3 flex items-center justify-between sm:justify-end gap-4 sm:pr-4">
                      <span className="sm:hidden text-sm text-gray-500">Subtotal:</span>
                      <div className="flex items-center gap-4">
                        <span className="text-gray-700 font-medium">Rs {item.price * item.qty}</span>
                        <button
                          onClick={() => {
                            removeFromCart(item.id);
                            toast.error(`${item.name} removed from cart. 🗑️`, { position: "top-right", autoClose: 2000, hideProgressBar: true });
                          }}
                          className="text-gray-400 hover:text-red-600 transition cursor-pointer p-1"
                          title="Remove item"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1-1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {/* COUPON & UPDATE ACTIONS */}
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6">
                  <div className="flex w-full sm:w-auto gap-2">
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="border border-gray-400 rounded-full px-5 py-2 text-sm focus:outline-none focus:border-green-600 w-full sm:w-48"
                    />
                    <button className="bg-[#2da94f] hover:bg-[#258e41] text-white font-medium text-sm px-6 py-2.5 rounded-full transition whitespace-nowrap">
                      Apply coupon
                    </button>
                  </div>
                  <button className="bg-[#a2d4ab] hover:bg-[#8bc295] text-white font-medium text-sm px-6 py-2.5 rounded-full transition w-full sm:w-auto">
                    Update cart
                  </button>
                </div>
                
                {/* CLEAR CART */}
                <div className="mt-4 flex justify-end">
                  <button 
                    onClick={() => {
                      clearCart();
                      toast.warn("Cart has been cleared entirely! 🧹", { position: "top-right", autoClose: 2500 });
                    }} 
                    className="text-xs text-red-500 hover:underline"
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="border border-gray-400 p-6 rounded-2xl bg-white shadow-sm">
            <h3 className="text-md font-bold text-gray-900 uppercase tracking-wider mb-6 pb-2 border-b-0">
              Cart totals
            </h3>

            <div className="flex justify-between items-center text-sm py-3 border-b border-dashed border-gray-300">
              <span className="text-gray-700 font-medium">Subtotal</span>
              <span className="text-gray-600">Rs {subtotal}</span>
            </div>

            <div className="py-4 border-b border-dashed border-gray-300 text-sm">
              <div className="flex justify-between items-start mb-2">
                <span className="text-gray-700 font-medium">Shipment</span>
                <div className="text-right">
                  <p className="text-gray-600">Royal Shipping (Get at your door step): <span className="font-medium">Rs {shippingCost}</span></p>
                </div>
              </div>
              <p className="text-gray-600 mt-2">
                Shipping to <span className="font-bold text-gray-800">Punjab</span>.
              </p>
              <button className="text-blue-600 hover:underline text-xs font-semibold mt-1 block">
                Change address
              </button>
            </div>

            <div className="flex justify-between items-center py-4 mb-6 text-base font-bold text-gray-900">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>

            <Link
              to="/checkout"
              className="w-full block text-center bg-[#2da94f] hover:bg-[#258e41] text-white font-semibold py-3.5 rounded-full transition text-[15px]"
            >
              Proceed to checkout
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}