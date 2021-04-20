const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3003;

app.get("/", (req, res) => {
  const message = "Welcome to my page";
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
});