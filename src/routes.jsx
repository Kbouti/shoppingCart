import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Home from "./components/home/Home";

const routes = [
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/products", element: <Products /> },
      { path: "shoppingCart", element: <Cart /> },
    ],
  },
];


export default routes