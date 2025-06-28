import React from "react";

function Todo({ completed, id, title, dispatch }) {
  const handleDelete = () => {
    console.log("handle delete called");
    dispatch({ type: "DELETE_TODO",payload:{id:id}});
  };
  const handleToggle=()=>{
    console.log("handle toggle called");
    dispatch({type:"TOGGLE_TODO",payload:{id:id}})
  }
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        padding: "1rem",
        margin: "1rem",
        backgroundColor: "#cecece",
        borderRadius: "1rem",
      }}
    >
      <h4>id: {id}</h4>
      <h4>title: {title}</h4>
      <h4>completed: {completed ? "true" : "false"}</h4>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleToggle}>Toggle Completed</button>
    </div>
  );
}

export default Todo;
