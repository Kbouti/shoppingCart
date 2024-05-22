const Card = ({ product }) => {
  // These are the individual product cards

  return (
    <div className="productCard">
      <h3>{product.name}</h3>
      <h2>{product.price}</h2>
      <img></img>
      <form>
        <input type="number"></input>
      </form>
    </div>
  );
};

export default Card;
