import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import Header from "./components/header/Header.jsx";
import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";

import "./index.css";



// Ok is this our issue? Should products and shopping cart be children of App not siblings?
// First of all, we never finished the router lesson. We can follow along with the router lesson to make this better. 


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
