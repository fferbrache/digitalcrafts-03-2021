const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3005;
// HTTP methods
// GET
// POST

// middleware
app.use(express.json());

// routes
// 1 Main page aka / 
// 2 About page
// 3 Team
// 4 FAQ

app.get("/", (req, res) => {
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});


app.get("/about", (req, res) => {
  readFile("./about.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/team", (req, res) => {
  readFile("./team.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.post("/team", (req, res) => {
  console.log(req.body);
  const {logo,name} = req.body
  const message = `Your logo is ${logo} and it is called ${name}.`;
  res.send(message);
});

app.get("/faq", (req, res) => {
  readFile("./faq.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
})