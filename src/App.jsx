import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";

import { NavLink, Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const { name } = useParams();

  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [testProp, setTestProp] = useState("shitsnacks");



// Ok, the following code is fetching one product from the API. 
// Do we need to figure out promiseAll to get a whole bunch? 

  const products = [];
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`https://fakestoreapi.com/products/1`);
      result.json().then((json) => {
        console.log(json);
        products.push(json);
      });
    }
    fetchData();
  }, []);

  console.log(`products: ${products}`);

// setApiData(products);


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
        <Products apiData={products} />
      ) : name === "shoppingCart" ? (
        <Cart />
      ) : (
        <Home testProp={testProp} />
      )}
    </>
  );
}

export default App;
