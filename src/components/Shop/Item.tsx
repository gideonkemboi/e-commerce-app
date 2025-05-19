import LoveIcon from "../../assets/love.svg";
import CartIcon from "../../assets/cart.svg";
import { CartProduct, Product } from "../types";
import { Link } from "react-router-dom";

interface ItemProps {
  product: Product;
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

export default function Item({
  product,
  cartProducts,
  setCartProducts,
}: ItemProps) {
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

  return (
    <Link
      to={`/product/${product.id}`}
      className="flex h-75 w-75 flex-col overflow-hidden rounded-lg p-4 shadow-2xl"
    >
      <div className="flex gap-5">
        <div className="mr-auto flex-4">
          <p className="text-xs">{product.title}</p>
          <p className="text-xs font-medium">${product.price}USD</p>
        </div>
        <div className="flex flex-1 gap-1">
          <button className="h-5 w-5 cursor-pointer focus:outline-none">
            <img src={LoveIcon} alt="Like" className="h-full w-full" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleAddToCart(product);
            }}
            className="h-5 w-5 cursor-pointer focus:outline-none"
          >
            <img src={CartIcon} alt="Add to cart" className="h-full w-full" />
          </button>
        </div>
      </div>
      <div className="flex h-[80%] w-full items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="mx-auto h-auto w-1/2 object-contain"
        />
      </div>
    </Link>
  );
}
