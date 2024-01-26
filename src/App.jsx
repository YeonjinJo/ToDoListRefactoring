import { useState } from "react";

import InputSection from "./components/InputSection";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [toDo, setToDo] = useState([]);

  return (
    <div className="total_container">
      <h1>Yeonjin's React Basic Practice</h1>
      <InputSection toDo={toDo} setToDo={setToDo} />
      <ToDoList toDo={toDo} setToDo={setToDo} progress={true} />
      <ToDoList toDo={toDo} setToDo={setToDo} progress={false} />
    </div>
  );
}

export default App;
