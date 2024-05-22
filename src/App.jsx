import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";

import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState();

  const [testProp, setTestProp] = useState("shitsnacks");

  const { name } = useParams();

  // Ok, so we establish all our state variables here, then call components conditionally based on routes? Or something like that

  return (
    <>
      <header>
        <h1>KevDawg's webShop</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/shoppingCart">
            <span className="material-symbols-outlined">shopping_cart</span>
          </NavLink>
        </nav>
      </header>
      <hr />

      {name === "products" ? (
        <Products />
      ) : name === "shoppingCart" ? (
        <Cart />
      ) : (
        <Home testProp={testProp} />
      )}

      {/* <Outlet /> */}
      {/* <Home testProp={testProp} /> */}
    </>
  );
}

export default App;
