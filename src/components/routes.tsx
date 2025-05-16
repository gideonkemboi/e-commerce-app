import App from "./App";
import Home from "./Home";
import Shop from "./Shop/Shop";
import Product from "./Product";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "shop", element: <Shop /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },
    ],
  },
];

export default routes;
