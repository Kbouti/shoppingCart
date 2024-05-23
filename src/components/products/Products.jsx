import Card from "../productCard/Card";
// We'll use data from a different folder to make individual card components for each product

const Products = ({ apiData }) => {
  // This will likely take a prop that contains data fetched from our api


  console.log(`apiData.length: ${apiData.length}`);


  return (
    <>
      <section>
        <h3>Products section</h3>

        {apiData.map((product) => {
          return <Card key={product.title} product={product} />;
        })}
      </section>
    </>
  );
};

export default Products;
