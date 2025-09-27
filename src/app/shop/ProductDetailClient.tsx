"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useCartStore } from "../store/cartStore"; 

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

export default function ProductDetailClient({ product }: { product: Product }) {
  const [rgb, setRgb] = useState({ r: 255, g: 0, b: 255 });
  const addToCart = useCartStore((state) => state.addToCart); 

  // Update RGB values dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setRgb({
        r: Math.floor(Math.random() * 256),
        g: Math.floor(Math.random() * 256),
        b: Math.floor(Math.random() * 256),
      });
    }, 200);
    return () => clearInterval(interval);
  }, []);

  // Generate snowflakes
  const snowflakes = Array.from({ length: 120 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: `${2 + Math.random() * 5}px`,
    duration: `${5 + Math.random() * 7}s`,
    delay: `${Math.random() * 5}s`,
    opacity: Math.random() * 0.7 + 0.3,
    glow: `0 0 ${
      Math.random() > 0.7 ? 6 + Math.random() * 6 : 0
    }px hsl(${Math.random() * 360}, 100%, 75%)`,
  }));

  
  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-black via-purple-950 to-black text-white overflow-hidden">
      {/* Snow Layer (Background) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {snowflakes.map((f) => (
          <div
            key={f.id}
            className="absolute animate-snow rounded-full"
            style={{
              left: f.left,
              top: "-10px",
              width: f.size,
              height: f.size,
              opacity: f.opacity,
              boxShadow: f.glow,
              animationDuration: f.duration,
              animationDelay: f.delay,
              zIndex: 0,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <main className="relative z-10 mt-[100px] container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
        {/* Product Image with dynamic RGB ring */}
        <div
          className="w-full flex justify-center lg:w-1/2 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500"
          style={{
            boxShadow: `0 0 20px rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
            border: `4px solid rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`,
          }}
        >
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            className="w-[650px] h-[500px] object-cover rounded-3xl"
          />
        </div>

        {/* Product Details */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center gap-6">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-purple-300">${product.price}</p>
          <p className="text-lg text-white/80 leading-relaxed">{product.description}</p>
          <button
            onClick={handleAddToCart}
            className="mt-6 py-3 px-8 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.9)] transition-transform"
          >
            Add to Cart
          </button>
        </div>
      </main>

      {/* Snow animation styles */}
      <style jsx>{`
        @keyframes snow {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(150vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-snow {
          animation-name: snow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
}
