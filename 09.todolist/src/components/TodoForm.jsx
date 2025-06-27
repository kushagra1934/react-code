import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";

function TodoForm({ onAddTodo }) {
  const [title, setTitle] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    if (title.trim().length === 0) {
      alert("Please give input");
      return;
    }
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    onAddTodo(newTodo);
    setTitle("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default TodoForm;
