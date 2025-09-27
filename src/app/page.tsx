"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // Example products data
  const products = [
    { id: 1, name: "Naruto Figure", price: 25, image: "https://wizplex.com/cdn/shop/files/BP89923-NarutoCombinationBattle-UzumakiNaruto-FigurebyBanpresto_13.jpg?v=1723285869" },
    { id: 2, name: "Sailor Moon Keychain", price: 10, image: "https://ae01.alicdn.com/kf/Sdd9a97ebd4684351afe1797f383f8c6an.jpg" },
    { id: 3, name: "Attack on Titan Poster", price: 15, image: "https://weekendposter.co.uk/wp-content/uploads/2022/12/attack-on-titan-tv-series-poster-896x1024.jpg" },
    { id: 4, name: "Demon Slayer T-shirt", price: 30, image: "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/JULY/26/wjgAzFfC_3bae32b9f2be4d498af4f4bd41726213.jpg" },
  ];

  // State to manage snowflakes
  const [snowflakes, setSnowflakes] = useState<number[]>([]);

  useEffect(() => {
    // Generate 150 snowflake elements
    setSnowflakes(Array.from({ length: 150 }, (_, i) => i));
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* Snow background */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {snowflakes.map(flake => (
          <div
            key={flake}
            className="absolute w-1.5 h-1.5 rounded-full bg-white opacity-70 animate-snow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Hero section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center z-20 overflow-hidden">
        {/* Background zoom animation */}
        <motion.div
          className="absolute inset-0 bg-[url('https://yourimageshare.com/ib/f8c2f15SmY.png')] bg-cover bg-center filter brightness-60 z-0"
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{ duration: 25, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        {/* Title animation */}
        <motion.h1
          className="z-20 text-6xl md:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 drop-shadow-[0_0_50px_rgba(255,0,255,0.9)]"
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          Anime Shop
        </motion.h1>
        {/* CTA button */}
        <motion.button
          className="z-20 mt-12 py-4 px-12 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold text-lg shadow-xl hover:scale-110 hover:shadow-[0_0_60px_rgba(255,0,255,0.9)] transition-transform duration-300"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 2, type: "spring", stiffness: 100 }}
        >
          <Link href='/shop'>
            Shop Now
          </Link>
        </motion.button>
      </section>

      {/* Products section */}
      <section className="relative z-20 container mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-gradient bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text drop-shadow-[0_0_25px_rgba(255,0,255,0.8)]">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform-style-3d border-2 border-transparent hover:border-pink-500 transition-all duration-300"
              initial={{ opacity: 0, y: 120 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.06 }}
            >
              {/* Product image */}
              <motion.img
                src={product.image}
                alt={product.name}
                className="w-full h-60 object-cover transition-transform duration-500"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              />
              {/* Info overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black/70 backdrop-blur-md flex flex-col justify-center items-center p-4 rounded-3xl opacity-0 z-20"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <h3 className="text-xl font-bold mb-2 text-pink-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">{product.name}</h3>
                <p className="text-lg font-semibold mb-4 text-purple-300 drop-shadow-[0_0_10px_rgba(255,0,255,0.6)]">${product.price}</p>
                <motion.button
                  className="py-2 px-6 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.12, boxShadow: "0 0 35px rgba(255,0,255,0.8)" }}
                >
                  Add to Cart
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Snow animation CSS */}
      <style jsx>{`
        @keyframes snow {
          0% { transform: translateY(0); opacity: 0.8; }
          100% { transform: translateY(110vh); opacity: 0; }
        }
        .animate-snow {
          animation-name: snow;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .transform-style-3d { transform-style: preserve-3d; }
      `}</style>
    </div>
  );
}
