import useTodoStore from "./Store";
import "../style/TodoCounter.css"

const TodoCounter = () => {
  const todos = useTodoStore((state) => state.todos)
  return (
    <div>
    <p className='todo-counter'>Nombre de tâches: {todos.length}</p>
  </div>
  )
}

export default TodoCounter;
