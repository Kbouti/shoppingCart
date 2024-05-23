import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";


// import styles from "./index.css";

function App() {
  const { name } = useParams();

  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState([]);

  // Ok, the following code is fetching one product from the API.
  // Do we need to figure out promiseAll to get a whole bunch?

  // We are actually successfully using useEffect I believe. We will need to get more products from the API, but otherwise we're doing great!
  // We'll also need to set loading to false once we get all our data

  useEffect(() => {
    const newArray = [];
    for (let i = 1; i < 21; i++) {
      const url = "https://fakestoreapi.com/products/" + i;
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          // console.log(response);
          newArray.push(response);
        })
        .catch((error) => console.error(error));
    }
    console.log(`loop complete. Length: ${newArray.length}`)
// The problem here is we're not doing promiseAll.then().....

    setApiData(newArray);
  }, []);

  if (error) return <p> A friggen network error was encountered</p>;

  return (
    <>
      <div className="app">
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
          //  we'll have to do some kind of check here to see if we have data or nor. Currently if we refresh the products page it does not fetch data from api

          <Products apiData={apiData} />
        ) : name === "shoppingCart" ? (
          <Cart />
        ) : (
          <Home />
        )}
      </div>
    </>
  );
}

export default App;
