import React from "react";

export default function GetGeoLocation() {
  return (
    <div>
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
        Latitude: <span id="latitude"></span>&deg;
      </p>
      <p>
        Longitude: <span id="longitude"></span>&deg;
      </p>
    </div>
  );
}
