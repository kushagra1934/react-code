import { useReducer } from "react";

import "./App.css";

//useReducer --> to manage complex state
//Redux --> to manage complex state

//useState--> to manage simple state

//useReducer()
//return [state,dispatch]

//as an argument
//1.reducer function
//2.initial state

//dispatch function
//we pass object (action) as in argument

//reducer function
// accepts 2 parameters
//1.state,2.action
//return new state

function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return {
      ...state,
      count: state.count + 1,
    };
  }
  if (action.type === "RESET") {
    return {
      ...state,
      count: 0,
    };
  }
  if (action.type === "DECREMENT") {
    return {
      ...state,
      count: state.count - 1,
    };
  }
  return state; //default return
}

const initialState = { count: 0, firstName: "Kushagra" };

function App() {
  // const [state, setState] = useState({ count: 0 });

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrease = () => {
    dispatch({
      type: "INCREMENT",
    });
  };
  const handleReset = () => {
    dispatch({
      type: "RESET",
    });
  };
  const handleDecrease = () => {
    dispatch({
      type: "DECREMENT",
    });
  };

  return (
    <div className="App">
      <h1>useReducer Tutorial</h1>
      <hr />
      <h2>Hello {state.firstName}</h2>
      <h2>{state.count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleDecrease}>Decrease</button>
    </div>
  );
}

export default App;
