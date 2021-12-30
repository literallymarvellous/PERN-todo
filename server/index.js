const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} = require("./routes");

app.use(cors());
app.use(express.json());

// Routes
app.post("/todos", createTodo);
app.get("/todos", getTodos);
app.get("/todos/:id", getTodo);
app.put("/todos/:id", updateTodo);
app.delete("/todos/:id", deleteTodo);

app.listen(5000, () => {
  console.log("Server is running");
});
