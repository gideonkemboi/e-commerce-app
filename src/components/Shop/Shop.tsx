import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Product } from "../types";
import Item from "./Item";
import Dropdown from "./Dropdown";
import rightArrow from "../../assets/right-arrow.svg";
import Loading from "../Loading";
import { useAppContext } from "../context";

function Shop() {
  const location = useLocation();
  const [category, setCategory] = useState<string>(
    location.state?.category || "All",
  );
  const [products, setProducts] = useState<Product[] | null>(null);
  const { cartProducts, setCartProducts } = useAppContext();

  const urlFor = (category: string) => {
    if (category === "All") return "https://fakestoreapi.com/products";

    const categoryMap: Record<string, string> = {
      "men's clothing": "men's%20clothing",
      "women's clothing": "women's%20clothing",
      jewellery: "jewelery",
    };

    const path = categoryMap[category.toLowerCase()] || category.toLowerCase();
    return `https://fakestoreapi.com/products/category/${path}`;
  };

  useEffect(() => {
    setProducts(null);
    fetch(urlFor(category))
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, [category]);

  if (!products) {
    return (
      <div className="flex h-50 items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-5 p-8">
      <header>
        <h3 className="text-4xl font-medium">Shop</h3>
        <div className="z-9999 flex items-center gap-1">
          <NavLink to="/" className="font-light hover:font-medium">
            Home
          </NavLink>
          <img src={rightArrow} className="h-4 w-4 fill-gray-400" />
          <p className="font-light">Products</p>
          <img src={rightArrow} className="h-4 w-4 fill-gray-400" />
          <Dropdown value={category} onChange={setCategory} />
        </div>
      </header>

      <div className="grid grid-cols-1 place-items-center gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <Item
            key={product.id}
            product={product}
            cartProducts={cartProducts}
            setCartProducts={setCartProducts}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
