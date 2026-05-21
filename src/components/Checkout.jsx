import { useState } from "react";
import { motion } from "framer-motion";
import { useCart } from "../context/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Checkout() {
  const { cart, clearCart } = useCart(); 
  const [paymentMethod, setPaymentMethod] = useState("bank_transfer");
  const [createAccount, setCreateAccount] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  // Form Fields State
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    city: "",
    phone: "",
    email: "",
    orderNotes: ""
  });
  // Price Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const shippingCost = 200; 
  const discount = paymentMethod === "bank_transfer" ? Math.round(subtotal * 0.05) : 0;
  const total = subtotal + shippingCost - discount;

  const handleInputChange = (e, field) => {
    setFormData({ ...formData, [field]: e.target.value });
  };


  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!agreeTerms) {
      toast.error("Please accept the terms and conditions to proceed!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    if (cart.length === 0) {
      toast.warning("Your cart is empty!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    
    toast.success("Hurray! Your order placed successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    setFormData({ fullName: "", address: "", city: "", phone: "", email: "", orderNotes: "" });
    setAgreeTerms(false);
    
    if (clearCart) {
      setTimeout(() => {
        clearCart();
      }, 1500);
    }
  };

  return (
    <section className="py-12 px-4 sm:px-6 md:px-20 bg-white pt-24 font-sans text-gray-800">
      <ToastContainer className="mt-20" />

      <div className="max-w-7xl mx-auto">
        
        {/* CHECKOUT TITLE */}
        <h1 className="text-3xl font-bold mb-6 text-[#11385b]">Checkout</h1>

        {/* TOP BANNER 1 - RETURNING CUSTOMER */}
        <div className="mb-4 bg-[#f4f6f8] px-6 py-3 text-[14px] flex justify-between items-center text-gray-700 rounded-sm">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
            <span>Returning customer?</span>
          </div>
          <button type="button" className="text-gray-600 hover:underline cursor-pointer text-sm">Click here to login</button>
        </div>

        {/* TOP BANNER 2 - PAKISTAN ZONE */}
        <div className="mb-8 border border-black bg-[#fcfcfc] px-6 py-4 rounded-sm flex items-center gap-3 text-[15px]">
          <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
          <span>Customer matched zone "Pakistan"</span>
        </div>

        {/* MAIN FORM GRID */}
        <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* LEFT COLUMN - BILLING & DETAILS */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-xl font-bold text-[#11385b]">Billing & Shipping</h2>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange(e, "fullName")}
                  className="w-full border border-gray-600 rounded-full px-5 py-3 outline-none text-[15px] focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Complete Address <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  placeholder="House number and street name"
                  value={formData.address}
                  onChange={(e) => handleInputChange(e, "address")}
                  className="w-full border border-gray-600 rounded-full px-5 py-3 outline-none text-[15px] focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">City <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => handleInputChange(e, "city")}
                  className="w-full border border-gray-600 rounded-full px-5 py-3 outline-none text-[15px] focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Phone <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleInputChange(e, "phone")}
                  className="w-full border border-gray-600 rounded-full px-5 py-3 outline-none text-[15px] focus:border-green-600"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Email address (optional)</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange(e, "email")}
                  className="w-full border border-gray-600 rounded-full px-5 py-3 outline-none text-[15px] focus:border-green-600"
                />
              </div>

              <div className="flex items-center gap-2 pt-2">
                <input 
                  type="checkbox" 
                  id="createAccount" 
                  checked={createAccount}
                  onChange={(e) => setCreateAccount(e.target.checked)}
                  className="w-4 h-4 rounded accent-green-600"
                />
                <label htmlFor="createAccount" className="text-sm font-medium text-gray-700 cursor-pointer">Create an account?</label>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-lg font-bold text-[#11385b] mb-2">Additional information</h3>
              <label className="block text-sm font-medium text-gray-600 mb-2">Order notes (optional)</label>
              <textarea
                rows="5"
                placeholder="Notes about your order, e.g. special notes for delivery."
                value={formData.orderNotes}
                onChange={(e) => handleInputChange(e, "orderNotes")}
                className="w-full border border-gray-600 rounded-3xl p-5 outline-none text-[15px] focus:border-green-600 resize-none"
              />
            </div>
          </div>

          {/* RIGHT COLUMN - YOUR ORDER BOX */}
          <div className="lg:col-span-5 border border-gray-400 p-6 rounded-2xl bg-white shadow-sm">
            <h3 className="text-md font-bold text-gray-900 uppercase tracking-wider mb-6">
              Your order
            </h3>

            <div className="flex justify-between items-center text-sm font-bold pb-2 border-b border-gray-300">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-4 text-sm text-gray-700">
                  <span className="font-medium text-gray-600">
                    {item.name} <span className="font-bold text-gray-800">× {item.qty}</span>
                  </span>
                  <span className="font-medium">Rs {item.price * item.qty}</span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center text-sm py-4 border-t border-b border-dashed border-gray-300">
              <span className="text-gray-700 font-medium">Subtotal</span>
              <span className="font-medium">Rs {subtotal}</span>
            </div>

            <div className="py-4 border-b border-dashed border-gray-300 text-sm">
              <div className="flex justify-between items-start">
                <span className="text-gray-700 font-medium">Shipment</span>
                <span className="text-gray-600 text-right">Royal Shipping (Get at your door step): Rs {shippingCost}</span>
              </div>
            </div>

            {paymentMethod === "bank_transfer" && (
              <div className="flex justify-between items-center text-sm py-4 border-b border-dashed border-gray-300 text-green-700 font-medium">
                <span>5% Bank Transfer Savings</span>
                <span>-Rs {discount}</span>
              </div>
            )}

            <div className="flex justify-between items-center py-4 text-base font-bold text-gray-900">
              <span>Total</span>
              <span>Rs {total}</span>
            </div>

            <div className="mt-4 border border-gray-300 rounded-sm overflow-hidden text-[14px]">
              {/* BLOCK 1: BANK TRANSFER */}
              <div className="border-b border-gray-300">
                <label className="flex items-center gap-2 p-4 cursor-pointer bg-gray-50 font-medium">
                  <input
                    type="radio"
                    name="payment_method"
                    value="bank_transfer"
                    checked={paymentMethod === "bank_transfer"}
                    onChange={() => setPaymentMethod("bank_transfer")}
                    className="w-4 h-4 accent-green-600"
                  />
                  <span>🏦 Bank Transfer — Save 5%</span>
                </label>
                
                {paymentMethod === "bank_transfer" && (
                  <div className="p-5 bg-white border-t border-gray-200 text-gray-700 space-y-3 text-[13.5px] leading-relaxed">
                    <p><span className="font-bold">Save 5%</span> when you pay via bank transfer.</p>
                    <div className="text-xs space-y-0.5 text-gray-600 bg-gray-50 p-3 border rounded-sm">
                      <p>Bank: <span className="font-bold text-gray-800">UBL</span></p>
                      <p>Account Title: <span className="font-bold text-gray-800">Syed Hammad Shah</span></p>
                      <p>Account Number: <span className="font-bold text-gray-800">12345678019</span></p>
                    </div>
                    <p>After payment, send screenshot on WhatsApp for instant order confirmation: <br />
                      <span className="font-bold text-gray-900">0312 3456789</span>
                    </p>
                    <p className="font-bold text-[#11385b] text-xs">Orders are confirmed immediately after payment verification.</p>
                  </div>
                )}
              </div>

              {/* BLOCK 2: CASH ON DELIVERY */}
              <div className="border-b border-gray-300">
                <label className="flex items-center gap-2 p-4 cursor-pointer bg-gray-50 font-medium">
                  <input
                    type="radio"
                    name="payment_method"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                    className="w-4 h-4 accent-green-600"
                  />
                  <span>💵 Cash on delivery</span>
                </label>
              </div>

              {/* BLOCK 3: ONLINE PAYMENT FASTPAY */}
              <div>
                <label className="flex items-center justify-between p-4 cursor-pointer bg-gray-50 font-medium">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="payment_method"
                      value="online_payment"
                      checked={paymentMethod === "online_payment"}
                      onChange={() => setPaymentMethod("online_payment")}
                      className="w-4 h-4 accent-green-600"
                    />
                    <span>💳 Online Payment (Easypaisa, JazzCash, Cards & Bank)</span>
                  </div>
                </label>
                {paymentMethod === "online_payment" && (
                  <div className="p-4 bg-white border-t border-gray-200 flex flex-col items-end gap-2">
                    <div className="text-blue-800 font-extrabold text-lg tracking-tight flex items-center gap-1">
                      <span className="text-blue-600 text-xs font-normal">powered by</span> 
                      <span className="text-blue-900">P</span>PayFast
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* PRIVACY POLICY & TERMS */}
            <div className="mt-6 text-[12.5px] text-gray-600 space-y-4">
              <p>
                Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{" "}
                <a href="#privacy" className="text-green-700 underline">privacy policy</a>.
              </p>
              
              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 mt-0.5 accent-green-600"
                />
                <label htmlFor="agreeTerms" className="cursor-pointer">
                  I have read and agree to the website <a href="#terms" className="text-green-700 underline font-semibold">terms and conditions</a> <span className="text-red-500">*</span>
                </label>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="w-full mt-6 bg-[#2da94f] hover:bg-[#258e41] text-white font-semibold py-3.5 rounded-full transition text-[16px] cursor-pointer block text-center"
            >
              Place order
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}