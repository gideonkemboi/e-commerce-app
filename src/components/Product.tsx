import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import { useAppContext } from "./App";
import type { Product } from "./types";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { isOpen, setIsOpen, cartProducts, setCartProducts } = useAppContext();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  function openModal() {
    setIsOpen(true);
  }

  function handleAddToCart(product: Product) {
    if (cartProducts.length === 0) {
      setCartProducts([{ ...product, quantity: 1 }]);
    } else {
      const productIndexInCart = cartProducts.findIndex(
        (prod) => prod.id === product.id
      );

      if (productIndexInCart !== -1) {
        setCartProducts((prevCartProducts) => {
          return prevCartProducts.map((prod, i) => {
            if (i === productIndexInCart) {
              return { ...prod, quantity: prod.quantity + 1 };
            }
            return prod;
          });
        });
      } else {
        setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
      }
    }
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="productDetail">
        <div>
          <img src={product.image} alt={product.title} />
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
          <button
            onClick={() => {
              openModal();
              handleAddToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <Cart
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
    </div>
  );
}

export default Product;
