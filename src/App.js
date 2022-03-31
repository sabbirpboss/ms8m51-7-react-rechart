import React from "react";
import Barchart from "./components/Barchart/Barchart";
import Chart from "./components/Chart/Chart";
import Piechart from "./components/Piechart/Piechart";

const App = () => {
  
  return (
    <div className="App">
      <Chart></Chart>
      <Barchart></Barchart>
      <Piechart></Piechart>
    </div>
  );
};

export default App;
