import styles from "./Cart.module.css";

const Cart = ({ shoppingCart, setShoppingCart }) => {
  return (
    <>
      <section className={styles.cart}>
        <h3>Shopping Cart</h3>
        {shoppingCart.length < 1 ? <p>Your cart is empty</p> : null}
      </section>
    </>
  );
};

export default Cart;
