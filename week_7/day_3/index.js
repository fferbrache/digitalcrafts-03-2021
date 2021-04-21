const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.port || 3002;
const pool = require("./db.js");
console.log(port);

// middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("Welcome to node server");
});

// routes that define for our node server

// CRUD 

// Create todo list
app.post("/todo", async (req, res) => { 
  try {
    const {description} = req.body;

    const newTodoInDB = await pool.query("INSERT INTO todo (description) VALUES($1)", [description]);
    console.log(req.body);
    res.json(newTodoInDB);
  } catch (err) {
    console.log(err.message);
  }
});
// Read the todo list
app.get("/read_todos", async (req, res) => {
  try {
    const readTodosFromDB = await pool.query("SELECT  * from todo");
    res.json(readTodosFromDB);
  } catch (err) {
    console.log(err.message);
  }
})

// read a specific todo
app.get("/read_todos/:id", async (req, res) => {
  try {
    const {id} = req.params;
    const readSingleTodoFromDB = await pool.query("SELECT  * from todo WHERE todo_id = ($1)", [id]);
    res.json(readSingleTodoFromDB);
  } catch (err) {
    console.log(err.message);
  }
})

// Update the todo item on todolist

// Delete the todo

app.listen(port, () => {
  console.log(`Your server is being hosted on localhost:${port}`);
})