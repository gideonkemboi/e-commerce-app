import { useState } from "react";
import { Outlet, useOutletContext } from "react-router-dom";
import Header from "./Header";
import { CartProduct } from "./types";

interface AppContext {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  cartProducts: CartProduct[];
  setCartProducts: React.Dispatch<React.SetStateAction<CartProduct[]>>;
}

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Outlet
        context={
          {
            isOpen,
            setIsOpen,
            cartProducts,
            setCartProducts,
          } satisfies AppContext
        }
      />
    </>
  );
}

export function useAppContext() {
  return useOutletContext<AppContext>();
}

export default App;
