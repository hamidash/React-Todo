import React, { Component } from "react";

class TodoForm extends Component {
  state = {
    taskName: "",
  };

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addTask(this.state.taskName);
    this.setState({
      taskName: "",
    });
  };

  changeHandler = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  render() {
    return (
      <form action="" >
        <label htmlFor="taskName">
          <input
            type="text"
            name="taskName"
            onChange={this.changeHandler}
            value={this.state.taskName}
            placeholder="Add your tasks here"
            autoComplete="off"
          />
        </label>
        <button className="button" onClick={this.submitHandler}>Add To Do</button>
        <button className="btn clear" onClick = {this.props.clearDoneTasks}>Clear Tasks</button>
      </form>
    );
  }
}

export default TodoForm;
