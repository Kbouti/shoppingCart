import styles from "./Cart.module.css";

const Cart = ({ shoppingCart, setShoppingCart }) => {
  // We're getting a bug where we can't delete the JOhn Hardy Women's legends bracelet.

  const remove = (e) => {
    let targetProduct = e.target.parentElement.firstChild.innerHTML;
    const newCart = [];
    for (let i = 0; i < shoppingCart.length; i++) {
      let thisProduct = shoppingCart[i].product.title;
      if (thisProduct !== targetProduct) {
        console.log(`no match with ${shoppingCart[i].product.title}`);

        // Ok the problem is the & sign.

        newCart.push(shoppingCart[i]);
      } else if (thisProduct === targetProduct){
        console.log(`found a match, gotta delete`);
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
