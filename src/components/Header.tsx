import Input from "./Input";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

function Header({isOpen, setIsOpen, cartProducts, setCartProducts}) {

  return (
    <>
      <div className="header">
        <div className="top">
          <div className="logo">FakeStore</div>
          <ul>
            <li className="search">
              <Input placeholder="Search for products" />
            </li>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink
                to="/shop"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Shop
              </NavLink>
            </li>
            <li>
              <a onClick={() => setIsOpen(true)}>Cart</a>
            </li>
          </ul>
        </div>
      </div>
      <Cart isOpen={isOpen} setIsOpen={setIsOpen} cartProducts={cartProducts} setCartProducts={setCartProducts} />
    </>
  );
}

export default Header;
