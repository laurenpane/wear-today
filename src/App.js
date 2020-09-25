import React from "react";
import GetGeoLocation from "./Components/GetGeoLocation.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="blurred-box">
        <header>Wear Today</header>
        <GetGeoLocation />
      </div>
    </div>
  );
}

export default App;
