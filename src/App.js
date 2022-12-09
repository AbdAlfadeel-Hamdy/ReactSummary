import Todo from "./components/Todo";
import Backdrop from "./UI/Backdrop";
import Modal from "./UI/Modal";

const App = () => {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo title="Learn React" />
      <Todo title="Master React" />
      <Modal />
      <Backdrop />
    </div>
  );
};

export default App;
