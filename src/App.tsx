import TodoCounter from "./components/TodoCounter";
import TodoAdder from "./components/TodoAdder";
import TodoContainer from "./components/TodoContainer";
import "./index.css"
import "./style/GlobalStyleApp.css"

function App() {
  return (
    <>
      <div className="main-container">
        <div>
          <TodoAdder />
          <TodoCounter />
        </div>
        <div className="main-todo-container">
          <TodoContainer/>
        </div>
      </div>
    </>
  );
}

export default App;
