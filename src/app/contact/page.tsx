"use client";
import { useEffect, useState } from "react";
import { FaEnvelope, FaPhone, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function ContactUs() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setHue(prev => (prev + 1) % 360), 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white flex flex-col items-center justify-center px-6 py-20 overflow-hidden">

      {/* RGB Glowing Background Circles */}
      <div className="absolute inset-0 -z-10 flex justify-center items-center">
        <div
          style={{ boxShadow: `0 0 250px 80px hsl(${hue}, 100%, 50%)`, borderRadius: "50%" }}
          className="w-96 h-96 animate-pulse-slow"
        />
        <div
          style={{ boxShadow: `0 0 180px 60px hsl(${(hue + 180) % 360}, 100%, 50%)`, borderRadius: "50%" }}
          className="w-72 h-72 animate-pulse-slow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>

      {/* Heading */}
      <h1 className="text-7xl font-extrabold mb-16 text-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-text-glow drop-shadow-[0_0_40px_rgba(255,0,255,0.8)]">
        Contact Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-5xl w-full text-center lg:text-left">

        {/* Contact Info */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <div
            style={{ border: `2px solid hsl(${hue}, 100%, 50%)` }}
            className="flex items-center gap-4 p-6 rounded-xl bg-white/10 shadow-md hover:shadow-lg transition-shadow"
          >
            <FaEnvelope className="text-pink-500 text-3xl" />
            <span className="text-white font-medium">contact@yourcompany.com</span>
          </div>

          <div
            style={{ border: `2px solid hsl(${(hue + 120) % 360}, 100%, 50%)` }}
            className="flex items-center gap-4 p-6 rounded-xl bg-white/10 shadow-md hover:shadow-lg transition-shadow"
          >
            <FaPhone className="text-purple-500 text-3xl" />
            <span className="text-white font-medium">+1 234 567 890</span>
          </div>

          <div
            style={{ border: `2px solid hsl(${(hue + 240) % 360}, 100%, 50%)` }}
            className="flex items-center gap-6 p-6 rounded-xl bg-white/10 shadow-md hover:shadow-lg transition-shadow justify-center lg:justify-start"
          >
            <FaInstagram className="text-pink-400 text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <FaTwitter className="text-blue-400 text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <FaLinkedin className="text-blue-700 text-3xl hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>

        {/* Contact Form */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 transition-all"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/50 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
          />
          <button className="mt-4 py-4 px-8 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.9)] transition-transform">
            Send Message
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(0.95); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }

        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 10px rgba(255,255,255,0.3); }
          50% { text-shadow: 0 0 40px rgba(255,255,255,0.7); }
        }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
