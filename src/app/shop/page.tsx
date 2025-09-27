"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Snowflake = {
  id: number;
  left: string;
  duration: string;
  delay: string;
  size: string;
  opacity: number;
  glow: string;
};

export default function Shop() {
  const products = [
    { id: 1, name: "Naruto Hoodie", price: 45, image: "https://sw6.elbenwald.de/media/99/d6/0f/1688683193/E1073064_2.jpg" },
    { id: 2, name: "One Piece Mug", price: 15, image: "https://sw6.elbenwald.de/media/4a/58/26/1701820378/E1079471_3.jpg" },
    { id: 3, name: "Sailor Moon Necklace", price: 25, image: "https://i.etsystatic.com/37121023/r/il/668cdc/6040095209/il_fullxfull.6040095209_dkgv.jpg" },
    { id: 4, name: "Attack on Titan Poster", price: 12, image: "https://weekendposter.co.uk/wp-content/uploads/2022/12/attack-on-titan-tv-series-poster-896x1024.jpg" },
    { id: 5, name: "Demon Slayer Figure", price: 65, image: "https://i.ebayimg.com/images/g/7L4AAOSwB7ViY1kK/s-l1200.jpg" },
    { id: 6, name: "Bleach Keychain", price: 8, image: "https://theworldofnerds.com/cdn/shop/files/1_f12ac5df-1986-44df-875a-e0bc3318c10a.jpg?v=1732700278" },
    { id: 7, name: "Dragon Ball T-shirt", price: 30, image: "https://pronk.in/cdn/shop/files/65_6377b76b-6a33-4e05-bfbe-9f2957b9886c.jpg?v=1708778113" },
    { id: 8, name: "Jujutsu Kaisen Ring", price: 20, image: "https://mugensense.com/cdn/shop/files/JujutsuKaisenHigh-Gold-BundleProduct-1080x1080.jpg" },
    { id: 9, name: "Tokyo Ghoul Mask", price: 40, image: "https://i.ebayimg.com/images/g/Hi8AAOSwgkFnUVqr/s-l1200.jpg" },
    { id: 10, name: "Fullmetal Alchemist Watch", price: 35, image: "https://64.media.tumblr.com/e6f7ff08fff36d412071518dce0dfb31/f15a0491be70f836-b1/s1280x1920/949fd05d18643080560e18c432bd03ad0c3b57f6.jpg" },
    { id: 11, name: "Hunter x Hunter Hoodie", price: 42, image: "https://www.culturekings.com/cdn/shop/files/02046581-YB295_mens_0010_1024x1024.jpg?v=1698296308" },
    { id: 12, name: "Fairy Tail Bracelet", price: 18, image: "https://manga-imperial.fr/cdn/shop/products/product-image-1358505092_1600x.jpg?v=1671758134" },
    { id: 13, name: "Death Note Notebook", price: 22, image: "https://animeislandca.com/cdn/shop/files/Screenshot2024-11-11at1.35.10PM.png?v=1752014388" },
    { id: 14, name: "Pokémon Pikachu Plush", price: 28, image: "https://i0.wp.com/pokemonstore.co/wp-content/uploads/2022/03/big-size-pikachued-plush-doll-cute-anime_main-2.jpg?fit=1000%2C1000&ssl=1" },
    { id: 15, name: "Neon Genesis EVA Model", price: 80, image: "https://media.entertainmentearth.com/assets/images/55856edf562141baba976e520d5d238axl.jpg" },
    { id: 16, name: "My Hero Academia Cap", price: 25, image: "https://i.ebayimg.com/images/g/C2gAAOSwcN5mSGqf/s-l1200.jpg" },
    { id: 17, name: "Black Clover Necklace", price: 20, image: "https://julia-rose.co.uk/wp-content/uploads/2024/05/black-5-clover-necklace.jpg" },
    { id: 18, name: "Sword Art Online Sword", price: 120, image: "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/p/pp_night_sky_sword_03.jpeg" },
    { id: 19, name: "Chainsaw Man Poster", price: 14, image: "https://down-ph.img.susercontent.com/file/sg-11134201-7rfi4-m9sd6ddjbve1b2" },
    { id: 20, name: "Ghibli Totoro Lamp", price: 55, image: "https://ghibli-village.com/cdn/shop/files/1.png?v=1705735254&width=1445" },
  ];

  const [snowflakes, setSnowflakes] = useState<Snowflake[]>([]);

  useEffect(() => {
    const layers = [
      { count: 60, speed: 8, sizeRange: [1, 3] },
      { count: 50, speed: 12, sizeRange: [2, 4] },
      { count: 40, speed: 18, sizeRange: [3, 6] },
    ];

    const flakes: Snowflake[] = [];
    let id = 0;
    layers.forEach((layer) => {
      for (let i = 0; i < layer.count; i++) {
        flakes.push({
          id: id++,
          left: `${Math.random() * 100}%`,
          duration: `${layer.speed + Math.random() * 5}s`,
          delay: `${Math.random() * 5}s`,
          size: `${layer.sizeRange[0] + Math.random() * (layer.sizeRange[1]-layer.sizeRange[0])}px`,
          opacity: Math.random() * 0.7 + 0.3,
          glow: Math.random() > 0.7 ? "0 0 8px rgba(255,255,255,0.8)" : "none",
        });
      }
    });
    setSnowflakes(flakes);
  }, []);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans bg-gradient-to-b from-black via-purple-950 to-black text-white">
      {/* Snow Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="absolute rounded-full bg-white animate-snow"
            style={{
              left: flake.left,
              top: "-10px",
              width: flake.size,
              height: flake.size,
              animationDuration: flake.duration,
              animationDelay: flake.delay,
              opacity: flake.opacity,
              boxShadow: flake.glow,
            }}
          />
        ))}
      </div>

      {/* Products */}
      <main className="relative z-10 container mx-auto px-6 py-20">
        <motion.h2
          className="text-5xl font-extrabold text-center mb-16 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text drop-shadow-[0_0_30px_rgba(255,0,255,0.8)]"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Anime Shop Collection
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {products.map((product, i) => (
            <Link key={product.id} href={`/shop/${product.id}`}>
              <motion.div
                className="relative rounded-3xl overflow-hidden backdrop-blur-lg bg-white/10 shadow-2xl cursor-pointer border border-white/20 group"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.6 }}
                whileHover={{ scale: 1.08, rotateY: 5 }}
              >
                <Image
                  width={600}
                  height={600}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-72 object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-75"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-t from-black/80 via-black/50 to-transparent">
                  <h3 className="text-2xl font-bold text-pink-400 mb-2 drop-shadow-lg">{product.name}</h3>
                  <p className="text-lg font-semibold text-purple-300 mb-4">${product.price}</p>
                  <button className="py-2 px-6 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-bold shadow-lg hover:scale-110 hover:shadow-[0_0_25px_rgba(255,0,255,0.9)] transition-transform">
                    Add to Cart
                  </button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </main>

      <style jsx>{`
        @keyframes snow {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(150vh); opacity: 0; }
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
