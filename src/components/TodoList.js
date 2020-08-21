import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class TodoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <section>
        <h1>Todo list</h1>
        <TodoItem />
      </section>
    );
  }
}
