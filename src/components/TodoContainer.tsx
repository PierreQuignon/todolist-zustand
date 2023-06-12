import { FC } from "react";
// import { MdDelete } from "react-icons/md";
// import { MdCheckBoxOutlineBlank } from "react-icons/md";
// import { AiOutlineCheckSquare } from "react-icons/ai";
import "../style/TodoContainer.css";

const TodoContainer:FC = () => {

  return (
    <>
      <h1 className="title-container">Liste des tâches</h1>
      {/* <ul>
        {todos.map((todo: todoType) => (
          <li className="todo-container" key={todo.id}>
            <div className="todo-title">{todo.title}</div>
            <div className="todo-content">{todo.content}</div>
            <div className="delete-validate">
              <button className="toggle-box">
                {todo.done ? (
                  <AiOutlineCheckSquare />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </button>
              <button className="delete-icon">
                <MdDelete />
              </button>
            </div>
          </li>
        ))}
      </ul> */}
    </>
  );
};
export default TodoContainer;
