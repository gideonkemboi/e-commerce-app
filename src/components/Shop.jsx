import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Item({ id, image, name, rate, count, price }) {
  return (
    <Link to={`/product/${id}`} className="item">
      <img src={image} alt={name} />
      <div>{name}</div>
      <div className="rating">
        <div>Rating: {rate}</div>
        <div>({count})</div>
      </div>
      <div>Price: {price}</div>
    </Link>
  );
}

function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  });

  return (
    <div className="shop">
      <div className="products">
        {products.map((product) => (
          <Item
            key={product.id}
            id={product.id}
            image={product.image}
            name={product.title}
            rate={product.rating.rate}
            count={product.rating.count}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
