import TodoForm from "./components/TodoForm";
import Todos from "./components/Todos";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Redux", completed: true },
    { id: 3, title: "Learn React Router", completed: false },
    { id: 4, title: "Learn React Hooks", completed: true },
    { id: 5, title: "Learn React Context", completed: false },
  ]);

  const handleAddTodo = (newTodo) => {
    setTodos((prevState) => [...prevState, newTodo]);
    console.log("Added new todo", newTodo);
  };

  const toggleCompleted = (id) => {
    // console.log("toggle completed",id);
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <h1 className="main-title">Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        toggleCompleted={toggleCompleted}
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default App;
