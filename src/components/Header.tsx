"use client";
import Link from "next/link";
import {
  FaShoppingCart,
  FaUser,
  FaDragon,
  FaHome,
  FaStore,
  FaInfoCircle,
  FaEnvelope,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";
import { useCartStore } from "../app/store/cartStore"; 

export default function TransparentHeaderWithIcons() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Get cart items from Zustand store
  const items = useCartStore((state) => state.items);
  const cartCount = items.reduce((acc, item) => acc + item.quantity, 0);

  // Navigation links with icons
  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Shop", href: "/shop", icon: <FaStore /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", href: "/contact", icon: <FaEnvelope /> },
  ];

  return (
    <header className="w-full fixed top-0 z-50">
      <div className="w-full bg-black/30 backdrop-blur-md px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center space-x-2 cursor-pointer">
          <FaDragon className="text-white text-2xl md:text-3xl drop-shadow-[0_0_6px_rgba(255,255,255,0.6)]" />
          <Link href="/">
            <h1 className="text-white text-2xl md:text-3xl font-extrabold tracking-wider hover:text-yellow-400 transition-colors">
              AnimeShop
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-white font-semibold items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center space-x-1 hover:text-yellow-400 transition-colors"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>

        {/* Icons: User, Cart, Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* User Icon */}
          <FaUser className="text-white text-xl hover:text-yellow-400 transition-colors cursor-pointer" />

          {/* Dynamic Shopping Cart */}
          <Link href="/cart">
            <div className="relative cursor-pointer">
              <FaShoppingCart className="text-white text-xl hover:text-yellow-400 transition-colors" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full text-xs px-1">
                  {cartCount}
                </span>
              )}
            </div>
          </Link>

          {/* Mobile Menu Toggle */}
          <div
            className="md:hidden cursor-pointer text-white text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden bg-black/80 backdrop-blur-md w-full px-6 py-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center space-x-2 text-white font-semibold hover:text-yellow-400 transition-colors"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
