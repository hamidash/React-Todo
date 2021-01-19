import React, { Component } from "react";
import TodoForm from "./components/TodoForm";
import ToDoList from "./components/TodoList";

import "./components/styles.css";

// Mock default data
const tasks = [
  {
    taskName: "Organize Garage",
    id: 1528817077286,
    completed: false,
  },
  {
    taskName: "Bake Cookies",
    id: 1528817084358,
    completed: false,
  },
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  //2. Add functionality, that takes 'taskName' argument 
  //   and adds it as a new object to existing state with random id and false completed status
  addTask = (taskName) => {
    console.log(taskName);
    const newTasks = {
      tasks: [
        ...this.state.tasks,
        {
          id: Date.now(),
          taskName: taskName,
          completed: false,
        },
      ],
    };

    this.setState(newTasks);
  };

  // 3.Toggle function that takes 'taskId' argument and compares it with each state object's id 
  // and changes completed value to opposite if id matches, else it returns the object as it is

  toggleTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  //4.Clear function that filters existing state by false completed status 
  //and updates state with filtered values
  clearTask = () => {
    const notCompletedTasks = this.state.tasks.filter((task) => {
      return task.completed == false;
    });
    //console.log(notCompletedTasks);
    this.setState({
      tasks: notCompletedTasks,
    });
  };

  //1. Return TodoForm and TodoList component and pass required props to each component
  render() {
    return (
      <div className="App">
        <TodoForm addTask={this.addTask} />
        <ToDoList
          tasks={this.state.tasks}
          toggleTask={this.toggleTask}
          clearTask={this.clearTask}
        />
      </div>
    );
  }
}

export default App;
