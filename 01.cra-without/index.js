const rootElement = document.getElementById("root");

// function helloWorld() {
//   //type,props,children
//   const el = React.createElement("h1", { className: "heading" }, "Hello World");
//   return el;
// }

function HelloWorld() {
  //type,props,children
  return <h1 className="heading">Hello World</h1>;
}

ReactDOM.createRoot(rootElement).render(<HelloWorld />);

//Above thing is very tedious to do again and again , so we use JSX to make it more readable and easy to write.


//Things to remember:
//react,reactDOM
//JSX(babel convert jsx to actual react code)