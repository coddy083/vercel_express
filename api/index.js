const app = require("express")();

app.get("/api", (req, res) => {
  res.end(`Hello from API`);
});

module.exports = app;
