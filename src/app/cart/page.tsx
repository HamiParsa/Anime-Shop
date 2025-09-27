"use client";
import { useCartStore } from "../store/cartStore";
import Image from "next/image";
import { FaTrash, FaMinus, FaPlus, FaShoppingCart, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";

export default function Cart() {
  // Zustand cart store methods and items
  const { items, addToCart, removeFromCart, decreaseQuantity, clearCart } = useCartStore();

  // Calculate total price
  const total = items.reduce((acc, item) => acc + item.price * item.quantity, 0);

  // State for showing success message after checkout
  const [success, setSuccess] = useState(false);

  // Handle checkout: clear cart and show success message
  const handleCheckout = () => {
    clearCart();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white p-10">
      {/* Page Title */}
      <h1 className="text-4xl mt-10 font-extrabold flex items-center gap-3 mb-10">
        <FaShoppingCart className="text-pink-500" /> Your Cart
      </h1>

      {/* Empty cart message */}
      {items.length === 0 ? (
        <p className="text-lg text-gray-400">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {/* Cart Items */}
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-6 bg-white/10 p-6 rounded-2xl shadow-lg hover:shadow-pink-500/40 transition-all"
            >
              {/* Product Image */}
              <Image
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              
              {/* Product Info */}
              <div className="flex-1">
                <h2 className="text-xl font-semibold">{item.name}</h2>
                <p className="text-gray-400">${item.price}</p>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQuantity(item.id)}
                  className="p-2 bg-pink-500 rounded-full hover:bg-pink-600"
                >
                  <FaMinus />
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() => addToCart(item)}
                  className="p-2 bg-purple-500 rounded-full hover:bg-purple-600"
                >
                  <FaPlus />
                </button>
              </div>

              {/* Remove Item */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="p-3 bg-red-600 rounded-full hover:bg-red-700"
              >
                <FaTrash />
              </button>
            </div>
          ))}

          {/* Cart Footer: Total and Actions */}
          <div className="flex justify-between items-center mt-8">
            <h2 className="text-2xl font-bold">Total: ${total.toFixed(2)}</h2>
            <div className="flex gap-4">
              <button
                onClick={clearCart}
                className="px-6 py-3 bg-red-600 rounded-xl font-bold hover:bg-red-700"
              >
                Clear Cart
              </button>
              <button
                onClick={handleCheckout}
                className="px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-xl font-bold hover:scale-105 transition-transform"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg flex items-center gap-3 animate-bounce">
          <FaCheckCircle className="text-2xl" />
          <span>Your purchase was successful!</span>
        </div>
      )}
    </div>
  );
}
