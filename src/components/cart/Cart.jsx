import styles from "./Cart.module.css";

const Cart = ({ shoppingCart, setShoppingCart }) => {
  const remove = (e) => {
    // RemoveHandler to take item off shopping cart
    e.preventDefault();
    console.log(`remove button clicked`);
  };

  return (
    <section className={styles.cart}>
      <h3>Shopping Cart</h3>
      {shoppingCart.length < 1 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          {shoppingCart.map((item) => {
            return (
              <li key={item.product.id}>
                <p>{item.product.title}</p>
                <p>quantity: {item.quantity}</p>
                <button onClick={remove}>Remove</button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Cart;
