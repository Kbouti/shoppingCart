import Card from "../productCard/Card";
import styles from "./Products.module.css"
// We'll use data from a different folder to make individual card components for each product

const Products = ({ apiData }) => {
  // This will likely take a prop that contains data fetched from our api


  console.log(`apiData.length: ${apiData.length}`);


  return (
    <>
      <section className={styles.products}>
        <h3>Products section</h3>
<div className={styles.cardContainer}>
        {apiData.map((product) => {
          return <Card key={product.id} product={product} />;
        })}
        </div>
      </section>
    </>
  );
};

export default Products;
