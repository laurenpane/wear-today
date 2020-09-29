import React from "react";
import GetGeoLocation from "./Components/GetGeoLocation.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <link
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@900&display=swap"
        rel="stylesheet"
      ></link>
      <header>Wear Today</header>
      <div className="blurred-box">
        <GetGeoLocation />
      </div>
    </div>
  );
}

export default App;
