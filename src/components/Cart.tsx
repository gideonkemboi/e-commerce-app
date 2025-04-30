import { useMemo } from "react";
import { CartProduct } from "./types";

interface CartProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

function Cart({ isOpen, setIsOpen, cartProducts, setCartProducts }: CartProps) {
  function closeModal() {
    setIsOpen(false);
  }

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

  const totalPrice = useMemo(() => {
    return Number(
      cartProducts.reduce(
        (total, product) => total + product.price * product.quantity,
        0,
      ),
    ).toFixed(2);
  }, [cartProducts]);

  return (
    <>
      <div
        className={`bg-opacity-50 fixed top-0 right-0 h-full w-1/2 bg-black transition-transform duration-300 shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-full bg-white p-5 text-black">
          <span
            className="absolute top-2.5 right-2.5 h-5 w-5 cursor-pointer"
            onClick={closeModal}
          >
            &times;
          </span>
          <div className="grid h-full grid-flow-row">
            <div>
              {cartProducts.length > 0 ? (
                cartProducts.map((product) => (
                  <div key={product.id}>
                    <div>{product.title}</div>
                    <div>{product.price * product.quantity}</div>
                    <div className="flex items-center">
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-900 px-1 py-2 font-bold text-white"
                        onClick={() => handleDecreaseItems(product.id)}
                      >
                        -
                      </button>
                      <div className="m-5 text-lg font-medium">
                        {product.quantity}
                      </div>
                      <button
                        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gray-900 px-1 py-2 font-bold text-white"
                        onClick={() => handleIncreaseItems(product.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>Cart is empty!</div>
              )}
            </div>
            {cartProducts.length > 0 ? (
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="text-xl font-medium">Total:</div>
                  <div className="text-xl">{totalPrice}</div>
                </div>
                <button className="w-1/3 cursor-pointer self-end rounded-lg bg-gray-900 px-1 py-2 text-white">
                  Check Out
                </button>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
