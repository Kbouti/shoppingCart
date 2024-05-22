import styles from "./Home.module.css";
import lindsayAndAlbie from "../../images/lindsayAndAlbie.jpeg";



// This isn't rendering because we're not telling it to yet in App. 
// We need to set it as the default component when neither of the children components are selected. 


const Home = ({testProp}) => {
  return (
    <>
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
