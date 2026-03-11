import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");      // Store current input
  const [todos, setTodos] = useState([]);    // Store list of tasks

  // Add task to the list
  const addTask = () => {
    if (task.trim() !== "") {
      setTodos([...todos, task]);  // Add task to array
      setTask("");                 // Clear input
    }
  };

  // Remove task by index
  const removeTask = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>To-Do List</h1>

      <input
        type="text"
        value={task}
        placeholder="Enter a task"
        onChange={(e) => setTask(e.target.value)}
        style={{ padding: "8px", fontSize: "16px", width: "250px" }}
      />

      <button
        onClick={addTask}
        style={{ padding: "8px 12px", marginLeft: "10px", fontSize: "16px" }}
      >
        Add
      </button>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              marginBottom: "10px",
              background: "#f0f0f0",
              padding: "8px 12px",
              borderRadius: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "300px",
              margin: "10px auto"
            }}
          >
            {todo}
            <button
              onClick={() => removeTask(index)}
              style={{
                background: "#f44336",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;