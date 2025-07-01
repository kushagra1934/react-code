import React from "react";
import Modal from "./UI/Modal";

function Header() {
  return (
    <header>
      <nav>
        <h1 className="logo">Shopping Cart</h1>
        <button>Show Cart</button>
      </nav>
      <Modal>
        <h1>Modal heading</h1>
        <p>Modal content</p>
      </Modal>
    </header>
  );
}

export default Header;
