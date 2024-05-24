import styles from "./Card.module.css";

const Card = ({ product, shoppingCart, setShoppingCart }) => {
  // These are the individual product cards

  // We will need an onsubmit handler for the button

  const addToCart = (e) => {
    e.preventDefault();
    console.log(`triggered addToCart for ${product.title} quantity: `);
    const quantity = e.target.children[0].value;
    console.log(quantity);
    // Now we need to update the shopping cart with this product.
    // First we need to check if it's in the shopping cart already.
    let newArray = [];

//  ************************************************************************************************************************
// This is our issue. Even once we've added the item and set new shoppingCart state, it never determines that yes the item is in the cart. 
// Maybe we gotta delete the old entry and make a new one. 


// SO: 
// Loop through shoppingCart. 
// If entry matches ours, store entries current quantity, then delete it. 
// If no match, push to new array. 
// Create new object. Quantity will be input qty plus saved qty 
//  ************************************************************************************************************************
    if (!shoppingCart.contains((item) => item.product.title == product.title)) {
      console.log(`it's not in the cart`);

      console.log(product.title);

      console.log(`shoppingCart:`);
      console.log(shoppingCart);

      console.log(`shoppingCart.length:`);
      console.log(shoppingCart.length);
      for (let i = 0; i < shoppingCart.length; i++) {
        console.log(shoppingCart[i].product.title);
      }

// Ok WHY isn't it getting to our else statment????


      const newEntry = { product: product, quantity: quantity };

      for (let i = 0; i < shoppingCart.length; i++) {
        newArray.push(shoppingCart[i]);
      }
      newArray.push(newEntry);
    } else {
      console.log(`it is in the cart`);
      for (let i = 0; i < shoppingCart.length; i++) {
        if (shoppingCart[i].product.title !== product.title) {
          newArray.push(shoppingCart[i]);
        } else {
          let newEntry = {
            product: shoppingCart[i],
            quantity: (shoppingCart[i].quantity += quantity),
          };
          newArray.push(newEntry);
        }
      }
    }

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
