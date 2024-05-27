import styles from "./Card.module.css";

const Card = ({ product, shoppingCart, setShoppingCart }) => {
  const addToCart = (e) => {
    e.preventDefault();
    console.log(`triggered addToCart for ${product.title} quantity: `);
    const quantity = e.target.children[0].value;
    console.log(quantity);
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
  };

  return (
    <div className={styles.productCard}>
      <img src={product.image}></img>
      <h3 className={styles.title}>{product.title}</h3>
      <h2 className={styles.price}>${product.price}</h2>
      <img></img>
      <form onSubmit={addToCart}>
        <input type="number" defaultValue="1"></input>
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
};

export default Card;
