import Header from "../header/Header";
import styles from "./Home.module.css";
import lindsayAndAlbie from "../../images/lindsayAndAlbie.jpeg";

const Home = ({testProp}) => {
  return (
    <>
      <Header />
      <section>
        <h3>You're in the home section.</h3>
        
        <p>{testProp}</p>

        <div className={styles.imgContainer}>
          <img
            src={lindsayAndAlbie}
            alt="Lovely lady with a large handsome dog."
          ></img>
        </div>

        <h4>Doesn't this look like home??</h4>
      </section>
    </>
  );
};

export default Home;
