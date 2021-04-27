const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3011;
const pool = require('./db.js');
const es6Renderer = require("express-es6-template-engine");

// middleware
app.use(express.json());
app.use(cors());
app.engine("html", es6Renderer);
app.set("views", "../templates");
app.set("view engine", "html");

app.get("/", (req, res) => {
  res.render("home");
});
// Read National Park list
app.get("/parks", async (req, res) => {
  try {
    const readParksFromDB = await pool.query("SELECT * from park ORDER by park_id");
    console.log(readParksFromDB);
    res.render("parkList", {
      locals: {
        park: readParksFromDB.rows
      }
  }); 
  } catch (err) {
    console.log(err.message);
  }
});

app.get("/parks/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const readSingleParkFromDB = await pool.query("SELECT * from park WHERE park_id = ($1)", [id]);
    res.render("park", {
      locals: {
        park: readSingleParkFromDB.rows
      }
    });
  } catch (err) {
    console.error(err.message);
  }
});

// CRUD

// Create a national park
app.post("/park", async (req, res) => {
  try {
    const {park_name, park_location} = req.body;

    const newParkInDB = await pool.query("INSERT INTO park (park_name, park_location) VALUES($1,$2)", [park_name,park_location]);
    console.log(req.body);
    res.json(newParkInDB);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a National Park
app.put("/update_park/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const {park_name, park_location} = req.body;

    const updateParkInDB = await pool.query(
      "UPDATE park SET(park_name, park_location) = ($1,$2) WHERE park_id = $3", [park_name, park_location, id]
    );
    res.json("updated park");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a National Park
app.delete("/delete_park/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const deleteParkInDB = await pool.query("DELETE FROM park WHERE park_id = $1", [id]);
    res.json("Park was successfully deleted");
  } catch (err) {
    console.log(err.message);
  }
});
app.listen(port, () => {
  console.log(`Your server is being hosted on localhost: ${port}`);
});