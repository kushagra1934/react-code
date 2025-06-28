import MyComponent from "./MyComponent";

// -----------context wrapper----------

// -----------context wrapper end------

//we are doing prop drilling here,
//we are passing the function from app to mycomponent to child to grandchild
//this is not a good way to do it, because it is not scalable and not maintainable
//use context to solve prop drilling

//how to use context
// step 1: import createContext
//step 2: create a context
//step 3: wrap application in context.Provider

//one is provide and other is consumer

import { createContext } from "react";

const MyAppContext = createContext();

function App() {
  function myFunc() {
    console.log("Hello from my func");
  }

  return (
    <MyAppContext.Provider value={myFunc}>
      <div
        style={{
          padding: "2rem",
          backgroundColor: "#c8e4b2",
          height: "100vh",
        }}
      >
        <h1>App</h1>
        <MyComponent />
      </div>
    </MyAppContext.Provider>
  );
}

export default App;
export {MyAppContext}
