import { useState, useEffect } from "react";

import Home from "./components/home/Home.jsx";
function App() {

  const [loading, setloading] = useState(true);
  const [error, setError] = useState();
  const [dataReceived, setdataReceived] = useState(false);
  const [apiData, setApiData] = useState();

  const [testProp, setTestProp] = useState("shitsnacks");



// We're setting our state variables here but how do we expect to access them in shopping cart and products pages?


// Ok so do propducts and shopping cart have to be children of home??



  return (
    <>
      <Home testProp={testProp} />
    </>
  );
}

export default App;
