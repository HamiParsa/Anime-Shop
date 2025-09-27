import { notFound } from "next/navigation";
import ProductDetailClient from "../ProductDetailClient"; // Client component

type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  { id: "1", name: "Naruto Hoodie", price: 45, image: "https://sw6.elbenwald.de/media/99/d6/0f/1688683193/E1073064_2.jpg", description: "Premium quality hoodie featuring Naruto Uzumaki from the iconic anime series. Soft, comfortable, and perfect for any Naruto fan." },
  { id: "2", name: "One Piece Mug", price: 15, image: "https://sw6.elbenwald.de/media/4a/58/26/1701820378/E1079471_3.jpg", description: "High-quality ceramic mug with Luffy's iconic design. Dishwasher safe and perfect for coffee or tea." },
  { id: "3", name: "Sailor Moon Necklace", price: 25, image: "https://i.etsystatic.com/37121023/r/il/668cdc/6040095209/il_fullxfull.6040095209_dkgv.jpg", description: "Elegant Sailor Moon necklace with crescent moon pendant. Stylish jewelry for anime lovers." },
  { id: "4", name: "Attack on Titan Poster", price: 12, image: "https://weekendposter.co.uk/wp-content/uploads/2022/12/attack-on-titan-tv-series-poster-896x1024.jpg", description: "High-quality poster featuring Attack on Titan characters in action. Perfect for decorating your room." },
  { id: "5", name: "Demon Slayer Figure", price: 65, image: "https://i.ebayimg.com/images/g/7L4AAOSwB7ViY1kK/s-l1200.jpg", description: "Collector figure of Tanjiro Kamado from Demon Slayer. Detailed and highly collectible." },
  { id: "6", name: "Bleach Keychain", price: 8, image: "https://theworldofnerds.com/cdn/shop/files/1_f12ac5df-1986-44df-875a-e0bc3318c10a.jpg?v=1732700278", description: "Anime keychain from Bleach series, featuring Ichigo's iconic mask." },
  { id: "7", name: "Dragon Ball T-shirt", price: 30, image: "https://pronk.in/cdn/shop/files/65_6377b76b-6a33-4e05-bfbe-9f2957b9886c.jpg?v=1708778113", description: "Cool Dragon Ball Z t-shirt with Goku design. Comfortable cotton material, perfect for casual wear." },
  { id: "8", name: "Jujutsu Kaisen Ring", price: 20, image: "https://mugensense.com/cdn/shop/files/JujutsuKaisenHigh-Gold-BundleProduct-1080x1080.jpg", description: "Golden ring inspired by Jujutsu Kaisen anime, detailed and stylish accessory." },
  { id: "9", name: "Tokyo Ghoul Mask", price: 40, image: "https://i.ebayimg.com/images/g/Hi8AAOSwgkFnUVqr/s-l1200.jpg", description: "Replica mask from Tokyo Ghoul. Perfect for cosplay and display." },
  { id: "10", name: "Fullmetal Alchemist Watch", price: 35, image: "https://64.media.tumblr.com/e6f7ff08fff36d412071518dce0dfb31/f15a0491be70f836-b1/s1280x1920/949fd05d18643080560e18c432bd03ad0c3b57f6.jpg", description: "FMA themed watch for anime fans. Stylish and functional accessory." },
  { id: "11", name: "Hunter x Hunter Hoodie", price: 42, image: "https://www.culturekings.com/cdn/shop/files/02046581-YB295_mens_0010_1024x1024.jpg?v=1698296308", description: "Comfortable hoodie from Hunter x Hunter series. Warm and perfect for winter." },
  { id: "12", name: "Fairy Tail Bracelet", price: 18, image: "https://manga-imperial.fr/cdn/shop/products/product-image-1358505092_1600x.jpg?v=1671758134", description: "Elegant Fairy Tail bracelet for fans. Adjustable size and stylish design." },
  { id: "13", name: "Death Note Notebook", price: 22, image: "https://animeislandca.com/cdn/shop/files/Screenshot2024-11-11at1.35.10PM.png?v=1752014388", description: "Replica Death Note notebook. Perfect collectible for anime enthusiasts." },
  { id: "14", name: "Pokémon Pikachu Plush", price: 28, image: "https://i0.wp.com/pokemonstore.co/wp-content/uploads/2022/03/big-size-pikachued-plush-doll-cute-anime_main-2.jpg?fit=1000%2C1000&ssl=1", description: "Cute Pikachu plush toy, soft and huggable. Ideal for children and collectors." },
  { id: "15", name: "Neon Genesis EVA Model", price: 80, image: "https://media.entertainmentearth.com/assets/images/55856edf562141baba976e520d5d238axl.jpg", description: "High-quality model of EVA from NGE anime. Detailed and collectible." },
  { id: "16", name: "My Hero Academia Cap", price: 25, image: "https://i.ebayimg.com/images/g/C2gAAOSwcN5mSGqf/s-l1200.jpg", description: "Stylish cap from My Hero Academia series. Adjustable and comfortable." },
  { id: "17", name: "Black Clover Necklace", price: 20, image: "https://julia-rose.co.uk/wp-content/uploads/2024/05/black-5-clover-necklace.jpg", description: "Elegant necklace inspired by Black Clover anime. Perfect for fans." },
  { id: "18", name: "Sword Art Online Sword", price: 120, image: "https://d3nt9em9l1urz8.cloudfront.net/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/p/p/pp_night_sky_sword_03.jpeg", description: "Replica sword from SAO anime series. Ideal for display or cosplay." },
  { id: "19", name: "Chainsaw Man Poster", price: 14, image: "https://down-ph.img.susercontent.com/file/sg-11134201-7rfi4-m9sd6ddjbve1b2", description: "High-quality poster from Chainsaw Man anime. Perfect for room decoration." },
  { id: "20", name: "Ghibli Totoro Lamp", price: 55, image: "https://ghibli-village.com/cdn/shop/files/1.png?v=1705735254&width=1445", description: "Adorable Totoro lamp inspired by Studio Ghibli. Great for anime-themed rooms." },
];


export async function generateStaticParams() {
  return products.map(p => ({ id: p.id }));
}

type PageProps = { params: { id: string } };

export default function ProductPage({ params }: PageProps) {
  const product = products.find(p => p.id === params.id);
  if (!product) return notFound();

  // ✅ Server only: send product data to Client component
  return <ProductDetailClient product={product} />;
}
