import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "./Header";
import { CartProduct } from "./types";
import Footer from "./Footer";
import closeBtn from "../assets/close.svg";

function App() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Header
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        cartProducts={cartProducts}
      />

      {isSidebarOpen && (
        <div
          className={`fixed top-0 left-0 flex h-full w-full justify-center bg-gray-900 text-white sm:w-64 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } z-50 transition-transform duration-300 ease-in-out`}
        >
          <button
            className="absolute top-4 right-4 text-white focus:outline-none"
            onClick={() => setIsSidebarOpen(false)}
          >
            <img src={closeBtn} alt="Close" className="h-8 w-8 stroke-white" />
          </button>
          <nav className="mt-16 flex flex-col gap-4 px-4 text-center">
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>
              Home
            </Link>
            <Link to="/shop" onClick={() => setIsSidebarOpen(false)}>
              Shop
            </Link>
          </nav>
        </div>
      )}

      <main className="flex-1">
        <Outlet
          context={{
            cartProducts,
            setCartProducts,
          }}
        />
      </main>

      <Footer />
    </>
  );
}

export default App;
