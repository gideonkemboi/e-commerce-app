import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "./types";

interface ItemProps {
  product: Product;
}

function Item({ product }: ItemProps) {
  return (
    <Link
      to={`/product/${product.id}`}
      className="flex h-75 w-50 flex-col overflow-hidden p-2.5 text-ellipsis whitespace-nowrap"
    >
      <img
        src={product.image}
        alt={product.title}
        className="block h-auto w-full"
      />
      <div>{product.title}</div>
      <div className="flex gap-5">
        <div>Rating: {product.rating.rate}</div>
        <div>({product.rating.count})</div>
      </div>
      <div>Price: {product.price}</div>
    </Link>
  );
}

function Shop() {
  const [products, setProducts] = useState<Product[] | null>(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  if (!products) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-4 gap-5">
        {products.map((product) => (
          <Item product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
