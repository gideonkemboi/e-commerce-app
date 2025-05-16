import { useState } from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import CartIcon from "../assets/cart.svg";
import searchIcon from "../assets/search.svg";
import hamburgerMenu from "../assets/hamburger-menu.svg";
import { CartProduct } from "./types";

interface HeaderProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducts: CartProduct[];
}

function Header({
  isSidebarOpen,
  setIsSidebarOpen,
  cartProducts,
}: HeaderProps) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white/10 backdrop-blur-lg">
      <div className="relative flex items-center justify-between p-5 md:gap-50">
        {/* Logo */}
        <Link to="/" className="flex-1 font-spartan text-4xl font-bold">
          exquisite.
        </Link>

        <div className="flex justify-between gap-4 md:w-1/2 md:flex-auto">
          {/* Search Button for Small Screens */}
          {!isSearchOpen && (
            <button
              className="block text-gray-500 focus:outline-none md:hidden"
              onClick={() => setIsSearchOpen(true)}
            >
              <img src={searchIcon} alt="Search" className="h-6 w-6" />
            </button>
          )}

          {/* Full Search Bar */}
          {isSearchOpen && (
            <div className="absolute top-0 left-0 z-50 flex w-full items-center bg-white p-4 shadow-md">
              <Input
                placeholder="What are you looking for..."
                className="h-12 w-[80%] flex-1 px-4 text-lg"
              />
              <button
                className="ml-2 text-gray-500 focus:outline-none"
                onClick={() => setIsSearchOpen(false)}
              >
                <svg
                  width="800px"
                  height="800px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                >
                  <g id="Menu / Close_SM">
                    <path
                      id="Vector"
                      d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                      stroke="#000000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          )}

          <div className="hidden flex-auto justify-between md:flex">
            <div className="relative flex w-1/2 items-center self-center">
              <img src={searchIcon} className="absolute right-3 h-6 w-6" />
              <Input
                placeholder="What are you looking for..."
                className="h-12 w-full pr-10 pl-4 text-lg"
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden items-center gap-4 md:flex">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
          </div>

          <Link
            to="/cart"
            className="relative"
            aria-label={`Cart with ${cartProducts.length} items`}
          >
            <img
              src={CartIcon}
              alt="Cart"
              className="h-7 w-auto cursor-pointer focus:outline-none md:h-8"
            />
            {cartProducts.length > 0 && (
              <div className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-gray-900 text-xs text-white">
                {cartProducts.length}
              </div>
            )}
          </Link>

          <button
            className="block focus:outline-none md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <img src={hamburgerMenu} className="h-8 w-8" alt="Menu" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
