import React from "react";
import { useState } from "react";
// import CleanupFunction from "./CleanupFunction";
import MouseMoveEvent from "./MouseMoveEvent";
import FetchDataExample from "./FetchDataExample";

//events
//document.addEventListener("click",()=>{})
//sideeffect

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <div className="App">
      <label htmlFor="showComponent">Show Component</label>
      <input
        type="checkbox"
        name="showComponent"
        id="showComponent"
        checked={showComponent}
        onChange={() => setShowComponent(!showComponent)}
      />
      {showComponent && <FetchDataExample />}
    </div>
  );
}

export default App;
