import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInputs from "./components/TodoInputs";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <TodoInputs />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
