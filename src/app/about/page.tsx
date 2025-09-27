"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FaUsers, FaStar, FaRocket } from "react-icons/fa";

export default function AboutPage() {
  const [hue, setHue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setHue(prev => (prev + 1) % 360), 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden flex flex-col items-center justify-center px-6 py-20">
      
      {/* RGB Glowing Circles */}
      <div className="absolute inset-0 -z-10">
        <div
          style={{ boxShadow: `0 0 200px 50px hsl(${hue}, 100%, 50%)`, borderRadius: "50%" }}
          className="absolute top-20 left-1/3 w-96 h-96 animate-pulse-slow"
        />
        <div
          style={{ boxShadow: `0 0 150px 40px hsl(${(hue + 180) % 360}, 100%, 50%)`, borderRadius: "50%" }}
          className="absolute bottom-10 right-1/4 w-72 h-72 animate-pulse-slow"
        />
      </div>

      {/* Heading */}
      <h1 className="text-7xl font-extrabold mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text animate-text-glow drop-shadow-[0_0_30px_rgba(255,0,255,0.8)]">
        About Us
      </h1>

      <div className="flex flex-col lg:flex-row items-center gap-16 max-w-6xl w-full">
        {/* Image with RGB border */}
        <div
          style={{ border: `5px solid hsl(${hue}, 100%, 50%)` }}
          className="w-full lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl p-1 hover:scale-105 transition-transform duration-500"
        >
          <Image
            src="https://images.stockcake.com/public/f/0/f/f0f7734b-cb79-43f1-bc57-cb8d53c4836d_large/colorful-anime-teamwork-stockcake.jpg"
            alt="Team"
            width={500}
            height={500}
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        {/* Text Info */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <p className="text-lg text-white/80 leading-relaxed flex items-center gap-3">
            <FaRocket className="text-pink-500 text-2xl" /> We are a team of passionate creators, designers, and coders.
          </p>
          <p className="text-lg text-white/80 leading-relaxed flex items-center gap-3">
            <FaUsers className="text-purple-500 text-2xl" /> Our mission is to bring high-quality and immersive experiences.
          </p>
          <p className="text-lg text-white/80 leading-relaxed flex items-center gap-3">
            <FaStar className="text-yellow-400 text-2xl" /> Every detail is crafted to excite and inspire anime and gaming fans.
          </p>
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
          50% { text-shadow: 0 0 30px rgba(255,255,255,0.7); }
        }
        .animate-text-glow { animation: text-glow 3s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
