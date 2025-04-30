import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { CartProduct } from "./types";
import { AppContext } from "./types";

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

export default App;
