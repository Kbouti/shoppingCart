import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";

import { NavLink, Outlet } from "react-router-dom";

function App() {
  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState();

  const [testProp, setTestProp] = useState("shitsnacks");


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

      <Outlet />
      {/* <Home testProp={testProp} /> */}
    </>
  );
}

export default App;
