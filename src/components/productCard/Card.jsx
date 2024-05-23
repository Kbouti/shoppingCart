import styles from "./Card.module.css";

const Card = ({ product }) => {
  // These are the individual product cards

  return (
    <div className={styles.productCard}>
      <img src={product.image}></img>
      <h3>{product.title}</h3>
      <h2>{product.price}</h2>
      <img></img>
      <form>
        <input type="number"></input>
      </form>
    </div>
  );
};

export default Card;
