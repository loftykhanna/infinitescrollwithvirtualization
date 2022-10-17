import React, { useEffect } from "react";
import "./modal.css";

const Modal = ({ onRequestClose, children }) => {
  // Use useEffect to add an event listener to the document
  useEffect(() => {
    function onKeyDown(event) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = "visible";
      document.removeEventListener("keydown", onKeyDown);
    };
  });

  return (
    <div className="modal__backdrop" onClick={onRequestClose}>
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
