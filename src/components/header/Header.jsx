import styles from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <header>
        <h1 className={styles.blue}>Shopping cart app header</h1>
        <nav>
          <ul className={styles.navbar}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/shoppingCart">Shopping Cart</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
