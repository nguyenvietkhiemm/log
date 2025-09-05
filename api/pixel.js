export default function handler(req, res) {
  const pixel = Buffer.from(
    "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQI12NgYGD4DwABBAEAEEaZsQAAAABJRU5ErkJggg==",
    "base64"
  );

  console.log({
    time: new Date().toISOString(),
    id: req.query.id || "none",
    ua: req.headers["user-agent"],
    ip: req.headers["x-forwarded-for"] || req.socket.remoteAddress,
  });

  res.setHeader("Content-Type", "image/png");
  res.send(pixel);
}
