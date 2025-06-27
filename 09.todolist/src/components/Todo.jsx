// import { useState } from 'react'
// import Todos from './Todos'

import React from "react";

function Todo({ id, title, completed, toggleCompleted, removeTodo }) {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        margin: "10px",
        borderRadius: "5px",

        textAlign: "center",
      }}
    >
      <p>title: {title}</p>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleCompleted(id)}
      />
      <p>completed: {completed ? "true" : "false"}</p>
      <button onClick={() => removeTodo(id)}>Remove</button>
    </div>
  );
}

export default Todo;
