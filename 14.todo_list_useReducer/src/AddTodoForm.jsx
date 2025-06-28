import { useState } from "react";

function AddTodoForm({dispatch}) {
  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if(title.trim()===''){
        alert("Please enter a valid title")
        setTitle("");
        return;

    }
    const newTodo={
        id:crypto.randomUUID(),
        title:title,
        completed:false
    }
    dispatch({type:"ADD_TODO",payload:{newTodo:newTodo}})
    setTitle("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Add a todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodoForm;
