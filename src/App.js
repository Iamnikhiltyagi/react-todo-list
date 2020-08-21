import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInputs from "./components/TodoInputs";
import TodoList from "./components/TodoList";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("handle change");
  };
  handleSubmit = (e) => {
    console.log("handle Submit");
  };
  clearList = () => {
    console.log("Clear List");
  };
  handleDelete = (id) => {
    console.log(`handle delete  ${id}`);
  };
  handleEdit = (id) => {
    console.log(`handle Edit  ${id}`);
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto col-md-8 mt-5">
              <h3 className="text-capitalize text-center">todo input</h3>

              <TodoInputs
                item={this.state.item}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
                editItem={this.state.editItem}
              />
              <TodoList
                items={this.state.items}
                clearList={this.clearList}
                handleDelete={this.handleDelete}
                handleEdit={this.handleEdit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
