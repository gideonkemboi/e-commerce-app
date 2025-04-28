import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Product } from "./types";

interface ItemProps {
  product: Product;
}

function Item({ product }: ItemProps) {
  return (
    <Link to={`/product/${product.id}`} className="item">
      <img src={product.image} alt={product.title} />
      <div>{product.title}</div>
      <div className="rating">
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
    <div className="shop">
      <div className="products">
        {products.map((product) => (
          <Item product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shop;
