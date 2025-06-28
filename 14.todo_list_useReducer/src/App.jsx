import { useReducer } from "react";
import AddTodoForm from "./AddTodoForm";
import Todos from "./Todos";

function reducer(todos, action) {
  if (action.type === "DELETE_TODO") {
    // const newState = [];
    // for(let todo of todos){
    //   if(todo.id!==action.payload){
    //     newState.push(todo)
    //   }
    // }
    // return newState;
    return todos.filter((todo) => {
      return todo.id !== action.payload.id;
    });
  }
  if (action.type === "TOGGLE_TODO") {
    console.log("toggling todo");
    return todos.map((todo) => {
      if (todo.id === action.payload.id) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });
  }
  if(action.type==="ADD_TODO"){
    console.log("adding todo")
    return [...todos,action.payload.newTodo]
  }
  alert("invalid action type");
  return todos;
}

const initialTodos = [
  { id: "1", title: "teach students", completed: true },
  { id: "2", title: "learn react", completed: false },
  { id: "3", title: "learn redux", completed: false },
];

function App() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      <AddTodoForm dispatch={dispatch} />
      <Todos todos={todos} dispatch={dispatch} />
    </>
  );
}

export default App;
