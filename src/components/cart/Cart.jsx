import styles from "./Cart.module.css";

const Cart = ({ shoppingCart, setShoppingCart }) => {
  const remove = (e) => {
    let targetKey = e.target.parentElement.getAttribute("keyProp");
    const newCart = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].product.id != targetKey) {
        newCart.push(shoppingCart[i]);
      }
    }
    setShoppingCart(newCart);
  };

  const sumTotal = () => {
    // Calculate total from shopping cart items
    let sum = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      sum += Number(shoppingCart[i].product.price) * shoppingCart[i].quantity;
    }

    sum = Number.parseFloat(sum).toFixed(2);
    return sum;
  };

  const submitOrder = () => {
    alert(`Your order has been submitted! Order total: $${sumTotal()}`);
    setShoppingCart([]);
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
            <button className={styles.submitBtn} onClick={submitOrder}>
              Submit Order
            </button>
          </div>
          {shoppingCart.map((item) => {
            return (
              <li key={item.product.id} keyprop={item.product.id}>
                <p>{item.product.title}</p>
                <p>quantity: {item.quantity}</p>
                <button className={styles.removeBtn} onClick={remove}>
                  Remove
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
};

export default Cart;
