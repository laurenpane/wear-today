import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {"geolocation" in navigator
          ? navigator.geolocation.getCurrentPosition((position) => {
              console.log(position.coords);
              const lat = position.coords.latitude;
              const lon = position.coords.longitude;
              document.getElementById("latitude").textContent = lat;
              document.getElementById("longitude").textContent = lon;
            })
          : console.log("Unavailable")}
        <p>
          Latitude: <span id="latitude">&deg;</span>
        </p>
        <p>
          Longitude: <span id="longitude">&deg;</span>
        </p>
      </header>
    </div>
  );
}

export default App;
