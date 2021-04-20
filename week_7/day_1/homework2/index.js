const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3004;

// middleware
app.use(express.json());

// 3 Routes
// 1 Default page aka '/'
// 2 Store
// 3 Contact

app.get("/", (req, res) => {
  const message = "Welcome to my page";
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/store", (req, res) => {
  const message = "Welcome to the store";
  readFile("./store.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/contact", (req, res) => {
  const message = "Contact me";
  readFile("./contact.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
})