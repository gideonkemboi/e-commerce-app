import { useMemo } from "react";
import { CartProduct } from "./types";
import { useAppContext } from "./context";
import { Link } from "react-router-dom";
import empty from "../assets/empty.svg";

function Cart() {
  const { cartProducts, setCartProducts } = useAppContext();

  function handleDecreaseItems(id: number) {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts
        .map((prod) => {
          if (id === prod.id) {
            // Decrease quantity by 1
            const updatedQuantity = prod.quantity - 1;

            if (updatedQuantity <= 0) {
              // If quantity becomes zero or less, remove the product from the cart
              return null;
            } else {
              // Otherwise, update the quantity
              return { ...prod, quantity: updatedQuantity };
            }
          }
          return prod;
        })
        .filter((prod): prod is CartProduct => prod !== null); // Type guard to remove null entries
    });
  }

  function handleIncreaseItems(id: number) {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.map((prod) => {
        if (id === prod.id) {
          return { ...prod, quantity: prod.quantity + 1 };
        }
        return prod;
      });
    });
  }

  function handleRemoveItem(id: number) {
    setCartProducts((prevCartProducts) => {
      return prevCartProducts.filter((prod) => prod.id !== id);
    });
  }

  const totalPrice = useMemo(() => {
    return Number(
      cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      ),
    ).toFixed(2);
  }, [cartProducts]);

  if (cartProducts.length <= 0) {
    return (
      <div
        style={{ backgroundImage: `url(${empty})` }}
        className="relative flex h-screen items-center justify-center bg-cover bg-center"
      >
        <div className="absolute inset-0 flex items-center justify-center text-2xl font-medium">
          Cart is empty!
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col justify-between px-20 py-6">
      <div className="flex w-full flex-col gap-2 md:w-1/2">
        {cartProducts.map((product) => (
          <div
            key={product.id}
            className="flex gap-2 border-b border-gray-500 py-4 last:border-b-0"
          >
            <button
              className="cursor-pointer self-center focus:outline-none"
              onClick={() => handleRemoveItem(product.id)}
            >
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
            <div className="flex h-15 w-15 items-center justify-center p-1 shadow-2xl">
              <img
                className="h-auto w-[80%]"
                src={product.image}
                alt={product.title}
              />
            </div>

            <div className="flex h-full w-[80%]">
              <Link to={`/product/${product.id}`} className="underline">
                {product.title}
              </Link>
              <div className="ml-auto flex flex-col items-center justify-between">
                <div className="self-end">
                  ${product.price * product.quantity}
                </div>
                <div className="flex items-center rounded-xl border">
                  <button
                    className="flex h-full cursor-pointer items-center justify-center border-r px-2 font-medium"
                    onClick={() => handleDecreaseItems(product.id)}
                  >
                    -
                  </button>
                  <div className="font- px-2 text-sm">{product.quantity}</div>
                  <button
                    className="flex h-full cursor-pointer items-center justify-center border-l px-2 font-medium"
                    onClick={() => handleIncreaseItems(product.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-auto flex flex-col items-center justify-between">
        <div className="self-end text-xl font-medium">Total: ${totalPrice}</div>
        <button className="w-full cursor-pointer rounded-lg bg-gray-900 px-1 py-2 text-white">
          Check Out
        </button>
      </div>
    </div>
  );
}

export default Cart;
