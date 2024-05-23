import styles from "./Card.module.css";

const Card = ({ product }) => {
  // These are the individual product cards


// We will need an onsubmit handler for the button


  return (
    <div className={styles.productCard}>
      <img src={product.image}></img>
      <h3 className={styles.title}>{product.title}</h3>
      <h2 className={styles.price}>${product.price}</h2>
      <img></img>
      <form>
        <input type="number" defaultValue="1"></input>
        <button type="submit">Add to cart</button>
      </form>
    </div>
  );
};

export default Card;
