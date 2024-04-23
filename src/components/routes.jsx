import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
import ErrorPage from "./ErrorPage";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "shop",
    element: <Shop />,
  },
  {
    path: "product/:id",
    element: <Product />,
  },
];

export default routes;
