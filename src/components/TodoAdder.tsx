import useTodoStore from "./Store";
import "../style/TodoAdder.css";
import { useState } from "react";

const TodoAdder = () => {
  const addTodo = useTodoStore((state) => state.addTodo);

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  return (
    <div className="container-adder">
      <input
        placeholder="Titre de la tâche"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <input
        placeholder="Contenu de la tâche"
        type="text"
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button
        className="button-add"
        onClick={() => addTodo(title, false, content)}
      >
        Ajouter
      </button>
    </div>
  );
};

export default TodoAdder;
