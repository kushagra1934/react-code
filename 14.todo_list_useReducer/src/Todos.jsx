import React from "react";
import Todo from "./Todo";
import { useContext } from "react";
import { TodosContext } from "./contexts/TodosProvider";
function Todos() {
  const { todos} = useContext(TodosContext);
  return (
    <div>
      {todos.map((todo) => {
        return <Todo {...todo} key={todo.id} />;
      })}
    </div>
  );
}

export default Todos;
