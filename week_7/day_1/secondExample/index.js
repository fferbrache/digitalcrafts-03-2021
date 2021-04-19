const express = require("express");
const app = express();

const PORT = 3000;

// tell what routes exist so that if you navigate to them in the url
// you get back whatever is in res.send
app.get("/", (req, res) => {
  res.send("hello");
});
// tell where your port is and what your app should be listening to
app.listen(PORT, () => {
  console.log(`server is on ${PORT}`);
})
