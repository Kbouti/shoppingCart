import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";

import Loading from "./components/loading/Loading.jsx";
import Error from "./components/Error.jsx";

import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

// import styles from "./index.css";

function App() {
  const { name } = useParams();

  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState([]);


  // ***********************************************************************************************************************
  // We need to use PromiseAll so that we can set state once all of our requests have finished fetching.
  // Then we'll need to set loading to false and data received to true.
  // dataReceived may actually be redundant. We may only need loading and error
  // ***********************************************************************************************************************

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
        .catch((error) => {
          console.error(error);
          setError(error);
        });
    }
    console.log(`loop complete. Length: ${newArray.length}`);
    setApiData(newArray);
  }, []);

  if (error) {
    return <Error />;
  }

  // if (loading) {
  //   return <Loading />;
  // }

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
