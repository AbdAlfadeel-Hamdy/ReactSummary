const Modal = ({ CloseHandler }) => {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={CloseHandler}>
        Cancel
      </button>
      <button className="btn" onClick={CloseHandler}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
