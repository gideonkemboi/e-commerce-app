import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cart from "./Cart";
import { useOutletContext } from "react-router-dom";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [isOpen, setIsOpen, cartProducts, setCartProducts] = useOutletContext();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => {
        setProduct(json);
      });
  });

  function openModal() {
    setIsOpen(true);
  }

  function handleAddToCart() {
    openModal();
    if (cartProducts.length === 0) {
      setCartProducts([...cartProducts, { ...product, quantity: 1 }]);
    } else {
      // Find the index of the product in the cartProducts array
      const productIndexInCart = cartProducts.findIndex(
        (prod) => prod.id === product.id
      );

      if (productIndexInCart !== -1) {
        // If the product is found, create a new array with the modified product quatity
        setCartProducts((prevCartProducts) => {
          return prevCartProducts.map((prod, i) => {
            if (i === productIndexInCart) {
              // Increase the quantity of the found object by one
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

  return (
    <div>
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
          <button onClick={() => handleAddToCart()}>Add to Cart</button>
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
