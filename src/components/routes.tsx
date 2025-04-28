import App from "./App";
import Home from "./Home";
import Shop from "./Shop";
import Product from "./Product";
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
    ],
  },
];

export default routes;
