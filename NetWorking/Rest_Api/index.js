import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const PORT = 5110;

app.all("/", (req, res) => {
  res.send("I'm Up");
});

const todos = [
  {
    id: "1",
    title: "Task 1",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    completed: true,
  },
];

/* View */
app.get("/todos", (req, res) => {
  res.json(todos);
});

/* Crate */
app.post("/todos", (req, res) => {
  const newTodos = req.body;
  todos.push(newTodos);
  res.status(201).json({ message: "new todo added" });
});

/* Update */
app.put("/todos/:id", (req, res) => {
  const newTodoData = req.body;
  console.log("cs");
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === todoParamId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newTodoData,
    };
    res.json({ message: "todo updated successfully" });
  } else {
    res.status(400).json({ message: "Todo item id not found" });
  }
});

/* Delete */
app.delete("/todos/:id", (req, res) => {
  const todoParamId = req.params.id;
  const todoIndex = todos.findIndex((todo) => todo.id === todoParamId);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({ message: "todo deleted succesfully" });
});

app.listen(PORT, () => {
  console.log(`server created on the port ${PORT}`);
});
