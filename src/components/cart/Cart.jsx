import styles from "./Cart.module.css";

const Cart = ({ shoppingCart, setShoppingCart }) => {
  return (
    <>
      <section className={styles.cart}>
        <h3>Shopping Cart</h3>
      </section>
    </>
  );
};

export default Cart;
