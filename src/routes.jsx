import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
import Home from "./components/home/Home";
import App from "./App";

const routes = [
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/products", element: <Products /> },
      { path: "shoppingCart", element: <Cart /> },
    ],
  },
];


export default routes

//  *********************************************************************************************************

// Our App will return Header and handle top level state. Child components will be products and shopping cart. 
// The "Home" content will be in it's own file but it won't be a new route. Just the component that's displayed on the index route
//  *********************************************************************************************************