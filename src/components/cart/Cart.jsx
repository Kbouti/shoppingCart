import styles from "./Cart.module.css";

const Cart = ({ shoppingCart, setShoppingCart }) => {
  return (

      <section className={styles.cart}>
        <h3>Shopping Cart</h3>
        {shoppingCart.length < 1 ? <p>Your cart is empty</p> :
        <ul>
          {shoppingCart.map((item) => {
            return (
              <li key={item.product.id}>
                <p>{item.product.title}</p>
                <p>quantity: {item.quantity}</p>
              </li>
            );
          })}
        </ul>}
      </section>

  );
};

export default Cart;
