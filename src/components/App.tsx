import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartProducts, setCartProducts] = useState([]);

  return (
    <>
      <Header
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        cartProducts={cartProducts}
        setCartProducts={setCartProducts}
      />
      <Outlet context={[isOpen, setIsOpen, cartProducts, setCartProducts]} />
    </>
  );
}

export default App;
