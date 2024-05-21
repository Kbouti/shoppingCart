import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";

import "./index.css";

// Tried to call a useState hook here and pass the state variable as a prop to products, doesn't work. Invalid hook call.

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  {
    path: "products",
    element: <Products />,
  },
  {
    path: "shoppingCart",
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
