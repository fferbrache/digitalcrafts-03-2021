// const express = require("express");
const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3001;

// middleware
app.use(express.json())

// routes
// 1 Default page aka / *
// 2 home page
// 3 about page
// 4 FAQ

app.get("/", (req, res) => {
  const message = "Welcome to my page";
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/home", (req, res) => {
  const message = "Welcome to my home page";
  readFile("./home.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/about", (req, res) => {
  const message = "Welcome to my about me";
  readFile("./about.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/faq", (req, res) => {
  const message = "Welcome to FAQ";
  readFile("./faq.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.post("/messages", (req, res) => {
  console.log(req)
  const {logo,name} = req.body
  const message = `Your logo is ${logo} and it is called ${name}`;
  res.send(message);
});

app.get("*", (req, res) => {
  const message = "Uh oh, this page is not real.";
  readFile("./error.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
});