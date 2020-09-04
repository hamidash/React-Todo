import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";

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


class App extends Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      tasks: tasks,
    };
  }

  addTask = (taskName) => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {id: ( Math.floor(Math.random()*100) * Date.now() ),
         taskName: taskName,
         completed: false,
        }
      ]
    })
  }

  clearDoneTasks = () => {
    this.setState({
      tasks: this.state.tasks.filter(task => {return task.completed == false })
    })
  }

  completeTask = (taskId) => {
    this.setState({
      tasks: this.state.tasks.map(task=>{
        if(task.id == taskId) {
          return {
            ...task,
            completed: !task.completed,
          }
        }
        return task;
      })
    })
  }



  render() {
    return (
      <div className="App">
        <section className="form">
        <TodoForm tasks = {this.state.tasks} addTask = {this.addTask} clearDoneTasks = {this.clearDoneTasks}/>
        </section>
        <section className="tasks">
          <TodoList tasks = {this.state.tasks} clearDoneTasks = {this.clearDoneTasks} completeTask = {this.completeTask}/>
        </section>
        
      </div>

    );
  }
}

export default App;
