const express = require("express");
const app = express();

// ảnh pixel base64 (1x1 PNG)
const pixel = Buffer.from(
  "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQI12NgYGD4DwABBAEAEEaZsQAAAABJRU5ErkJggg==",
  "base64"
);

app.get("/pixel", (req, res) => {
  // log thông tin request
  console.log({
    time: new Date().toISOString(),
    id: req.query.id || "none",
    ip: req.ip,
    ua: req.get("user-agent"),
  });

  // trả về ảnh PNG
  res.set("Content-Type", "image/png");
  res.send(pixel);
});

module.exports = app;
