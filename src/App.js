import { useRef, useState } from "react";
import "./App.css";

function App() {
  let [todos, setTodos] = useState([]);
  let inputRef = useRef();

  const handleAddTodo = () => {
    const text = inputRef.current.value;

    const newItem = { completed: false, text };
    setTodos([...todos, newItem]);
    inputRef.current.value = "";
  };

  const handleItemTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteItem = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <h2>To Do List</h2>
      <div className="to-do-container">
        <ul>
          {todos.map(({ text, completed }, index) => {
            return (
              <div className="item" key={index}>
                <li
                  className={completed ? "done" : ""}
                  onClick={() => handleItemTodo(index)}
                >
                  {text}
                </li>
                <span onClick={() => handleDeleteItem(index)}>❌</span>
              </div>
            );
          })}
        </ul>
      </div>
      <input ref={inputRef} placeholder="Enter item..." />

      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default App;
