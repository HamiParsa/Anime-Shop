"use client";
import Link from "next/link";
import { 
  FaInstagram, FaTwitter, FaFacebookF, 
  FaMapMarkerAlt, FaEnvelope, FaPhone,
  FaTruck, FaClock, FaShieldAlt,
  FaHome, FaShoppingBag, FaUsers, FaEnvelopeOpenText 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative w-full bg-black text-white pt-16 overflow-hidden">
      {/* RGB Glow Background */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div className="w-96 h-96 rounded-full animate-pulse-slow" style={{ boxShadow: `0 0 250px 80px hsl(280, 100%, 50%)` }} />
        <div className="w-72 h-72 rounded-full animate-pulse-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ boxShadow: `0 0 180px 60px hsl(100, 100%, 50%)` }} />
      </div>

      {/* Top Services */}
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-around items-center mb-10 gap-6">
        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <FaTruck className="text-2xl text-yellow-400" />
          <span>Fast & Free Shipping</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <FaClock className="text-2xl text-yellow-400" />
          <span>24/7 Customer Support</span>
        </div>
        <div className="flex items-center gap-3 bg-white/10 p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <FaShieldAlt className="text-2xl text-yellow-400" />
          <span>Secure Payment</span>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/20 pt-12">
        
        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                <FaHome /> Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                <FaShoppingBag /> Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                <FaUsers /> About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="flex items-center gap-2 hover:text-pink-500 transition-colors">
                <FaEnvelopeOpenText /> Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-lg mb-4">Contact</h3>
          <p className="flex items-center gap-2 text-sm mb-1">
            <FaMapMarkerAlt className="text-pink-500" /> 123 Anime St, Tokyo, Japan
          </p>
          <p className="flex items-center gap-2 text-sm mb-1">
            <FaEnvelope className="text-purple-500" /> info@animeshop.com
          </p>
          <p className="flex items-center gap-2 text-sm mb-1">
            <FaPhone className="text-blue-500" /> +81 123-456-789
          </p>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <Link href="#" className="hover:text-pink-500 transition-transform hover:scale-110"><FaInstagram /></Link>
            <Link href="#" className="hover:text-blue-400 transition-transform hover:scale-110"><FaTwitter /></Link>
            <Link href="#" className="hover:text-blue-700 transition-transform hover:scale-110"><FaFacebookF /></Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-10 text-sm text-gray-300 pb-6">
        © 2025 AnimeShop. All rights reserved.
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
      `}</style>
    </footer>
  );
}
