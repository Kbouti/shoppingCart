import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";
function App() {

  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState();



// We're setting our state variables here but how do we expect to access them in shopping cart and products pages?




  return (
    <>
      <Home />
    </>
  );
}

export default App;
