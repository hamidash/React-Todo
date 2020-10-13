import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";

//1. Add dummy tasks data

const tasks = [
  {
    taskName: "Go to school",
    id: 100,
    completed: false,
  },
  {
    taskName: "Learn JS",
    id: 200,
    completed: false,
  },
];

//2. Build App component as a class

class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // 3. Add state to our app, which takes dummy data from the above
  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  /*5. addTask function to handle new task creation once form is submitted and update the App state (this.state.tasks)
        by using this.setState function */

  addTask = (taskName) => {
    const newTask = {
      tasks: [
        ...this.state.tasks,
        {
          id: Date.now(),
          taskName: taskName,
          completed: false,
        },
      ],
    };

    this.setState(newTask);
  };

 /*6. completeTask function to handle the click on any "Task" div, 
 and match the task id passed in its arguments and change its "completed" status to opposite value, */

  completeTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if (task.id == taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  /*7. clearDoneTasks to handle Clear button on the TodoForm and filter Tasks data by task completed status is false (not completed) 
  and use setState function to set Tasks data to newly flitered array where only tasks with task completed status of false are left*/ 

  clearDoneTasks = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.filter((task) => {
        return task.completed === false; 
      }),
    });
  };


  // 4. Render Todo Form component and TodoList component as separate sections within the App
  render() {
    return (
      <div className="App">
        <section className="form">
          <TodoForm
            tasks={this.state.tasks}
            addTask={this.addTask}
            clearDoneTasks={this.clearDoneTasks}
          />
        </section>
        <section className="tasks">
          <TodoList
            tasks={this.state.tasks}
            clearDoneTasks={this.clearDoneTasks}
            completeTask={this.completeTask}
          />
        </section>
      </div>
    );
  }
}

export default App;
