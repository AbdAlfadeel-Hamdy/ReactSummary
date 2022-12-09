import { useState } from "react";
import Modal from "../UI/Modal";
import Backdrop from "../UI/Backdrop";
const Todo = ({ title }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const deleteHandler = () => {
    setModalIsOpen(true);
  };
  const closeHandler = () => {
    setModalIsOpen(false);
  };
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && <Modal CloseHandler={closeHandler} />}
      {modalIsOpen && <Backdrop CloseHandler={closeHandler} />}
    </div>
  );
};

export default Todo;
