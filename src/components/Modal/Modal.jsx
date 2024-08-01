import React from "react";
import "./Modal.scss";

const Modal = ({ onSubmit, close, content, children }) => {

  return (
    <section className="modal" onClick={() => close()}>
      <div className="modal__container">
        <div className="modal__content">{content}
        </div>
        <div className="modal__footer">
            <button className="modal__btn" onClick={() => onSubmit()}>{children}</button>
          </div>
      </div>
    </section>
  );
};

export default Modal;
