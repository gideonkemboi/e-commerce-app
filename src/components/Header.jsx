import Input from "./Input";
import { NavLink } from "react-router-dom";

function Header() {
  return (
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
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
