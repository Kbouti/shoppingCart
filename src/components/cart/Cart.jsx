import styles from "./Cart.module.css";

const Cart = ({ shoppingCart, setShoppingCart }) => {
  const remove = (e) => {
    // RemoveHandler to take item off shopping cart
    e.preventDefault();
    console.log(`remove button clicked`);
  };

  const sumTotal = () => {
    // Calculate total from shopping cart items
    let sum = 0;
    for (let i = 0;i < shoppingCart.length;i++){
      sum += (Number(shoppingCart[i].product.price) * shoppingCart[i].quantity)
    }
    return sum;
  };

  const submitOrder = () => {
    alert("Your order has been submitted! ");
    setShoppingCart([]);

    // We should also reset cart here
  };

  return (
    <section className={styles.cart}>
      <h3>Shopping Cart</h3>
      {shoppingCart.length < 1 ? (
        <p>Your cart is empty</p>
      ) : (
        <ul>
          <div className={styles.summary}>
            <p>Subtotal: ${sumTotal()}</p>
            <button onClick={submitOrder}>Submit Order</button>
          </div>
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
