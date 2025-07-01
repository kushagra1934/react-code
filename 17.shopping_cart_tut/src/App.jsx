import "./App.css";
import Header from "./components/Header";


import Products from "./components/Products";
import CartProvider from "./contexts/CartProvider";
function App() {
  return (
    <CartProvider>
      <Header/>
      <Products />
    </CartProvider>
  );
}

export default App;
