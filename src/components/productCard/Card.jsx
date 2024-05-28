import styles from "./Card.module.css";

// We need to make some kind of indication that the item has been updated to the cart.
// Perhaps an alert?

const Card = ({ product, shoppingCart, setShoppingCart }) => {
  const addToCart = (e) => {
    e.preventDefault();
    console.log(`triggered addToCart for ${product.title} quantity: `);
    const quantity = e.target.children[0].value;
    console.log(quantity);
    if (quantity < 1) {
      alert(`Must enter a valid quantity`);
      return;
    }
    const targetProduct = product.title;
    let newArray = [];
    let priorQuantity = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      if (shoppingCart[i].product.title === targetProduct) {
        priorQuantity = shoppingCart[i].quantity;
        console.log(
          `This item is already in the cart, adding ${quantity} to ${priorQuantity}`
        );
      } else {
        const newEntry = {
          product: shoppingCart[i].product,
          quantity: shoppingCart[i].quantity,
        };
        newArray.push(newEntry);
      }
    }
    const newEntry = {
      product: product,
      quantity: Number(priorQuantity) + Number(quantity),
    };
    newArray.push(newEntry);
    setShoppingCart(newArray);
    e.target.children[0].value = 1;
  };

  return (
    <div className={styles.productCard} keyprop={product.id}>
      <img src={product.image}></img>
      <h3 className={styles.title}>{product.title}</h3>
      <h2 className={styles.price}>
        ${Number.parseFloat(product.price).toFixed(2)}
      </h2>
      <img></img>
      <form onSubmit={addToCart}>
        <input type="number" min={1} defaultValue={1}></input>
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
};

export default Card;
