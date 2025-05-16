import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { useAppContext } from "./context";
import type { Product } from "./types";
import Loading from "./Loading";
import rightArrow from "../assets/right-arrow.svg";
import star from "../assets/star.svg";

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const { cartProducts, setCartProducts } = useAppContext();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  function handleAddToCart(product: Product) {
    if (cartProducts.length === 0) {
      setCartProducts([{ ...product, quantity: 1 }]);
    } else {
      const productIndexInCart = cartProducts.findIndex(
        (prod) => prod.id === product.id,
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

  function capitalizeFirstLetter(text: string) {
    return text.replace(/(^\s*\w|[.!?]\s*\w)/g, (match) => match.toUpperCase());
  }

  if (!product) {
    return (
      <div className="flex h-50 items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col gap-5 p-8">
        <header>
          <h3 className="text-4xl font-medium">Product</h3>
          <div className="flex items-center gap-1">
            <NavLink to="/" className="font-light hover:font-medium">
              Home
            </NavLink>
            <img src={rightArrow} className="h-4 w-4 fill-gray-400" />
            <p className="font-light whitespace-nowrap">
              {capitalizeFirstLetter(product.category)}
            </p>
            <img src={rightArrow} className="h-4 w-4 fill-gray-400" />
            <p className="truncate font-light whitespace-nowrap text-gray-500">
              {product.title}
            </p>
          </div>
        </header>

        <div className="flex w-full flex-col gap-8 text-gray-900 md:flex-row">
          <div className="flex flex-1 items-center justify-center md:py-10 md:shadow-2xl">
            <img className="w-75" src={product.image} alt={product.title} />
          </div>
          <div className="flex flex-1 flex-col">
            <div className="text-2xl">{product.title}</div>
            <div className="text-sm font-light">{product.description}</div>
            <div className="flex items-center gap-2">
              {product.rating && (
                <>
                  <img src={star} className="h-4 w-4" />
                  <div className="flex items-center">
                    <span>{product.rating.rate}</span>

                    <span className="font-light text-gray-500">
                      ({product.rating.count}
                      reviews)
                    </span>
                  </div>
                </>
              )}
            </div>
            <div className="text-2xl">${product.price}</div>
            <div className="mt-auto flex w-full flex-col gap-2">
              <button
                className="cursor-pointer rounded-lg bg-gray-900 py-4 text-white"
                onClick={() => {
                  handleAddToCart(product);
                }}
              >
                Add to Cart
              </button>
              <button className="rounded-lg border border-gray-900 py-4 text-gray-900">
                Buy this item
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
