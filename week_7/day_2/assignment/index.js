const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3006;

// middleware
app.use(express.json());

// Routes
// 1 Main
// 2 About
// 3 Contact
// 4 FAQ

// GET Requests
app.get("/", (req, res) => {
  readFile("./index.html", "utf8", (err,html) => {
    res.send(html)
  });
});

app.get("/about", (req, res) => {
  readFile("./about.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/contact", (req, res) => {
  readFile("./contact.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/faq", (req, res) => {
  readFile("./faq.html", "utf8", (err, html) => {
    res.send(html);
  });
});
// POST Request
app.post("/faq", (req, res) => {
  console.log(req.body);
  const { name, height } = req.body;
  const message = `Your name is ${name} and your height is ${height}.`;
  res.send(message);
})

// Listen
app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost: ${PORT}`)
})