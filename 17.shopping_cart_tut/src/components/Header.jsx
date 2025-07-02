import React from "react";
import { useEffect, useState } from "react";
import Modal from "./UI/Modal";
import Cart from "./Cart";

function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function closeModal() {
    setIsModalOpen(false);
  }
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);
  return (
    <header>
      <nav>
        <h1 className="logo">Shopping Cart</h1>
        <button onClick={() => setIsModalOpen(true)}>Show Cart</button>
      </nav>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <Cart />
        </Modal>
      )}
    </header>
  );
}

export default Header;
