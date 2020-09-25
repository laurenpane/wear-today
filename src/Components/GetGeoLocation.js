import React from "react";

export default function GetGeoLocation() {
  return (
    <div>
      {"geolocation" in navigator
        ? navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;
            document.getElementById("latitude").textContent = lat;
            document.getElementById("longitude").textContent = lon;

            const data = { lat, lon };
            const options = {
              method: "POST",
              body: JSON.stringify(data),
              headers: { "Content-Type": "application/json" },
            };

            const response = await fetch("/api/geo", options);
            const json = await response.json();
            console.log(json);
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
