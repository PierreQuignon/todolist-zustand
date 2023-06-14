import { MdDelete } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import "../style/TodoContainer.css";
import useTodoStore from "./Store";
import { Todo } from "./Store";

const TodoContainer = () => {
  const todos = useTodoStore((state) => state.todos);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);

  return (
    <>
      <h1 className="title-container">Liste des tâches</h1>
        {todos.map((todo: Todo) => (
          <div className="todo-container" key={todo.id}>
            <div className="todo-title">{todo.title}</div>
            <div className="todo-content">{todo.content}</div>
            <div className="delete-validate">
              <button
                className="toggle-box"
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.done ? (
                  <AiOutlineCheckSquare />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
              </button>
              <button
                className="delete-icon"
                onClick={() => deleteTodo(todo.id)}
              >
                <MdDelete />
              </button>
            </div>
          </div>
        ))}
    </>
  );
};

export default TodoContainer;
