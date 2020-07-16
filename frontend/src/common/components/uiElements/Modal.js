import React from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";
import Backdrop from "./Backdrop";

const ModalOverlay = (props) => {
  const content = (
    <div className="modal">
      <header className="modal__header">
        <h2>{props.header}</h2>
      </header>
      <form
        onSubmit={
          props.onSubmit ? props.onSubmit : (event) => event.preventDefault()
        }
      >
        <div className="modal__content">{props.children}</div>
      </form>
      <footer className="modal__footer">{props.footer}</footer>
    </div>
  );

  return ReactDOM.createPortal(content, document.getElementById("modal-hook"));
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {props.show && <Backdrop onClick={props.onCancel} />}
      <CSSTransition
        in={props.show}
        timeout={200}
        classNames="modal"
        mountOnEnter
        unmountOnExit
      >
        <ModalOverlay {...props} />
      </CSSTransition>
    </React.Fragment>
  );
};

export default Modal;
