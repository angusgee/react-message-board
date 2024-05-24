import classes from "./Modal.module.css";

function Modal({ children }) {
  return (
    <>
      <div className={classes.backdrop} />
      <dialog className={classes.modal} open>
        {children}
      </dialog>
    </>
  );
}

export default Modal;