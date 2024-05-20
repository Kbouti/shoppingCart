import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header>
        <h1 className={styles.blue}>Shopping cart app header</h1>
        <nav >
            <ul className = {styles.navbar}>
                <li>
                    <a href="home">Home</a>
                </li>
                <li>
                    <a href="products">Products</a>
                </li>
                <li>
                    <a href="shoppingCart">Shopping Cart</a>
                </li>
            </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
