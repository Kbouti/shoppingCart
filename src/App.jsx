import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

function App() {
  const { name } = useParams();

  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState([]);
  const [testProp, setTestProp] = useState("shitsnacks");

  // Ok, the following code is fetching one product from the API.
  // Do we need to figure out promiseAll to get a whole bunch?

// We are actually successfully using useEffect I believe. We will need to get more products from the API, but otherwise we're doing great! 
// We'll also need to set loading to false once we get all our data



  useEffect(() => {
    fetch("https://fakestoreapi.com/products/1")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);

        let product = [];
        product.push(response);
        const newArray = apiData.concat(product);
        setApiData(newArray);
      })
      .catch((error) => console.error(error));
  }, []);

  if (error) return <p> A friggen network error was encountered</p>;
  // console.log(`products: ${products}`);

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
        <Products apiData={apiData} />
      ) : name === "shoppingCart" ? (
        <Cart />
      ) : (
        <Home testProp={testProp} />
      )}
    </>
  );
}

export default App;
