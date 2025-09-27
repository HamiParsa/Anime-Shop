"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Product type
type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
};

// Cart item extends Product with quantity
type CartItem = Product & { quantity: number };

// Zustand store state type
type CartState = {
  items: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
};

// Create cart store with persistence
export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],

      // Add product to cart or increase quantity if it already exists
      addToCart: (product) =>
        set((state) => {
          const existing = state.items.find((item) => item.id === product.id);
          if (existing) {
            return {
              items: state.items.map((item) =>
                item.id === product.id
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return { items: [...state.items, { ...product, quantity: 1 }] };
        }),

      // Remove product from cart completely
      removeFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item.id !== id),
        })),

      // Decrease quantity of a product, or remove if quantity becomes 0
      decreaseQuantity: (id) =>
        set((state) => {
          const item = state.items.find((i) => i.id === id);
          if (item && item.quantity > 1) {
            return {
              items: state.items.map((i) =>
                i.id === id ? { ...i, quantity: i.quantity - 1 } : i
              ),
            };
          }
          return { items: state.items.filter((i) => i.id !== id) };
        }),

      // Clear all items from cart
      clearCart: () => set({ items: [] }),
    }),
    {
      name: "cart-storage", // Name for persisted storage in localStorage
    }
  )
);
