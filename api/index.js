const express = require("express");
const app = express();

const pixel = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQI12NgYGD4DwABBAEAEEaZsQAAAABJRU5ErkJggg==",
  "base64"
);

app.get("/api/pixel", (req, res) => {
  res.set("Content-Type", "image/png");
  res.send(pixel);
});

module.exports = app;
