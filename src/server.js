require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require("path");

app.post("/api/geo", (req, res) => {
  console.log(req);
  //   console.log(req.body);
  //   const data = req.body;
  //   res.json({
  //     status: "success",
  //     latitude: data.lat,
  //     longitude: data.lon,
  //   });
});

// app.use(express.static(path.join(__dirname, "../build")));

// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "../build/index.html"));
// });

app.listen(PORT, () => {
  console.log(`API running on http://localhost:${PORT}`);
});
