import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { AiOutlineCheckSquare } from "react-icons/ai";
import "../style/TodoContainer.css";
import  useTodoStore  from "./Store";
import { Todo } from "./Store";
import { StoreState } from "./Store";


/**
 * A revoir en fonction de ton besoin mais dans mon cas pas utile 
 * sauf si tu geres dans le cas des todo done ou pas mais je pense 
 * qu'il y a mieux qu'une props
 *  interface TodoContainerProps {
  state: boolean;
  store:  StoreState;
}
*/
const TodoContainer=  () => {

  // recuperation de données du store qui s'actualise des que tu fais une action 
  const todos = useTodoStore((state) => state.todo);
  return (
    <>
      <h1 className="title-container">Liste des tâches</h1>
      <ul>
        {todos.map((todo: Todo) => (
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
      </ul>
    </>
  );
};

export default TodoContainer;
