import React from "react";
import { Component } from "react";

class ToDoFrom extends Component {
  constructor() {
    super();
    this.state = {
      taskName: "",
    };
  }

  handleChanges = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      taskName: this.state.taskName,
      id: Date.now(),
      completed: false,
    };
   
    this.props.add(newTask);

    this.setState({
      taskName: "",
    })
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          onChange={this.handleChanges}
          value={this.state.taskName}
          type="text"
          name="taskName"
          
        />
        <button>Add</button>
      </form>
    );
  }
}

export default ToDoFrom;
