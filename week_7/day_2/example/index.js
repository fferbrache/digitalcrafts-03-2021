const express = require("express");
const app = express();
const { readFile } = require("fs");

const PORT = 3005;

// middleware
app.use(express.json());

// routes
// 1 Main page aka / 
// 2 About page
// 3 FAQ
// 4 Team

app.get("/", (req, res) => {
  // const message = "Welcome to my page";
  readFile("./index.html", "utf8", (err, html) => {
    res.send(html);
  });
});


app.get("/about", (req, res) => {
  // const message = "Welcome to my about me";
  readFile("./about.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/faq", (req, res) => {
  // const message = "Welcome to FAQ";
  readFile("./faq.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.get("/team", (req, res) => {
  // const message = "Welcome to team page";
  readFile("./team.html", "utf8", (err, html) => {
    res.send(html);
  });
});

app.post("/team", (req, res) => {
  console.log(req);
  // res.send("Team page");
  const {logo,name} = req.body
  const message = `Your logo is ${logo} and it is called ${name}`;
  res.send(message);
});

app.listen(PORT, () => {
  console.log(`Your server is being hosted on localhost:${PORT}`);
})