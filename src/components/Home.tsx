import { Link } from "react-router-dom";
import electronics from "../assets/eletronics.jpg";
import jewellery from "../assets/jewellery.jpg";
import mensClothing from "../assets/menclothing.jpg";
import womensClothing from "../assets/womenclothing.jpg";
import bgImage from "../assets/background.jpg";

function Home() {
  return (
    <>
      <div
        className="relative flex h-screen items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold md:text-6xl">
            Welcome to Exquisite
          </h1>
          <p className="mt-4 text-lg md:text-xl">
            Discover the finest products curated just for you.
          </p>
          <Link
            to="/shop"
            className="mt-6 inline-block transform rounded bg-blue-500 px-6 py-3 text-lg font-medium text-white transition duration-300 hover:scale-105 hover:bg-blue-600"
          >
            Shop Now
          </Link>
        </div>
      </div>

      <div className="px-8 py-16 md:px-20">
        <h2 className="text-center text-3xl font-bold md:text-4xl">
          Featured Categories
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-4">
          <Link
            to="/shop"
            state={{ category: "Electronics" }}
            className="group relative flex h-64 items-center justify-center overflow-hidden rounded-lg bg-gray-200 shadow-lg"
          >
            <img
              src={electronics}
              alt="Electronics"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="relative z-10 text-xl font-bold text-white">
              Electronics
            </div>
            <div className="absolute inset-0 bg-black/30"></div>
          </Link>
          <Link
            to="/shop"
            state={{ category: "men's clothing" }}
            className="group relative flex h-64 items-center justify-center overflow-hidden rounded-lg bg-gray-200 shadow-lg"
          >
            <img
              src={mensClothing}
              alt="Men's Clothing"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="relative z-10 text-xl font-bold text-white">
              Men's Clothing
            </div>
            <div className="absolute inset-0 bg-black/30"></div>
          </Link>
          <Link
            to="/shop"
            state={{ category: "Women's clothing" }}
            className="group relative flex h-64 items-center justify-center overflow-hidden rounded-lg bg-gray-200 shadow-lg"
          >
            <img
              src={womensClothing}
              alt="Women's Clothing"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="relative z-10 text-xl font-bold text-white">
              Women's Clothing
            </div>
            <div className="absolute inset-0 bg-black/30"></div>
          </Link>
          <Link
            to="/shop"
            state={{ category: "Jewellery" }}
            className="group relative flex h-64 items-center justify-center overflow-hidden rounded-lg bg-gray-200 shadow-lg"
          >
            <img
              src={jewellery}
              alt="Jewellery"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="relative z-10 text-xl font-bold text-white">
              Jewellery
            </div>
            <div className="absolute inset-0 bg-black/30"></div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
