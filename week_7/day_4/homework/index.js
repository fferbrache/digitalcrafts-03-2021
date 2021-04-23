const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3007;
const pool = require("./db.js");
console.log(port);

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the National Park Database")
});

// CRUD

// Create a National Park
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

// Read National Park list
app.get("/read_park", async (req, res) => {
  try {
    const readParksFromDB = await pool.query("SELECT * from park ORDER by park_id");
    res.json(readParksFromDB.rows);
  } catch (err) {
    console.log(err.message);
  }
});
// Read a specific National Park
app.get("/read_park/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const readSingleParkFromDB = await pool.query("SELECT * from park WHERE park_id = ($1)", [id]);
    res.json(readSingleParkFromDB.rows);
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
// listen
app.listen(port, () => {
  console.log(`listening on port: ${port}`);
})