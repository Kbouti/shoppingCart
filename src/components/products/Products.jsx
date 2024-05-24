import Card from "../productCard/Card";
import styles from "./Products.module.css";

const Products = ({ apiData }) => {

  return (
    <>
      <section className={styles.products}>
        <h3>Products</h3>
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
