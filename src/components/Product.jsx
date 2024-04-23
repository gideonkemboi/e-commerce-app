import { useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
        console.log(json);
      });
  });

  return (
    <div>
      <Header />
      <div className="productDetail">
        <div>
          <img src={product.image} />
        </div>
        <div>
          <div>{product.title}</div>
          <div className="rating">
            {product.rating && (
              <>
                <div>Rating: {product.rating.rate}</div>
                <div>({product.rating.count})</div>
              </>
            )}
          </div>
          <div>Price: {product.price}</div>
          <div>{product.description}</div>
        </div>
      </div>
    </div>
  );
}

export default Product;
