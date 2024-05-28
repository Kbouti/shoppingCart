// Deployed by Vercel At: 
//  https://shopping-cart-beryl-two.vercel.app/shoppingCart


import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import Home from "./components/home/Home.jsx";
import Products from "./components/products/Products.jsx";
import Cart from "./components/cart/Cart.jsx";
import Loading from "./components/loading/Loading.jsx";
import Error from "./components/Error.jsx";

function App() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [apiData, setApiData] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);

  let cartQuantity = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    cartQuantity += shoppingCart[i].quantity;
  }

  useEffect(() => {
    async function fetchApis() {
      const urlList = [];
      for (let i = 1; i < 21; i++) {
        const url = "https://fakestoreapi.com/products/" + i;
        urlList.push(url);
      }
      const fetchPromises = urlList.map((url) =>
        fetch(url).then((response) => response.json())
      );
      // fetchPromises is now an array of fetch promises, i.e. a list of requests yet to be fired.
      // Next we send all of those fetch requests, wait until they've all fulfilled, then use responses to set state.
      // Helpful explanation at:
      // https://www.geeksforgeeks.org/how-to-fetch-an-array-of-urls-with-promise-all/
      Promise.all(fetchPromises)
        .then((responses) => {
          const responseData = responses.map((response) => response);
          setApiData(responseData);
          setLoading(false);
        })
        .catch((error) => {
          console.error(`Experienced an error fetching API data. `, error);
          setError(error);
        });
    }
    fetchApis();
  }, []);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="app">
        <header>
          <h1>KevDawg's webShop</h1>
          <nav>
            <ul>
              <li className="navLi">
                <NavLink className="navLink" to="/">Home</NavLink>
              </li>
              <li className="navLi">
                <NavLink className="navLink" to="/products">Products</NavLink>
              </li>
              <li className="navLi">
                <NavLink className="navLink" to="/shoppingCart">
                  <span className="material-symbols-outlined">
                    shopping_cart
                  </span>
                </NavLink>
                {cartQuantity > 0 ? (
                  <div className="indicator">{cartQuantity}</div>
                ) : null}
              </li>
            </ul>
          </nav>
        </header>
        <hr />
        <div className="body">
          {name === "products" ? (
            <Products
              apiData={apiData}
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ) : name === "shoppingCart" ? (
            <Cart
              shoppingCart={shoppingCart}
              setShoppingCart={setShoppingCart}
            />
          ) : (
            <Home />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
