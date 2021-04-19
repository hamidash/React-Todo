import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css"

const tasks =  [
  {
    taskName: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    taskName: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  state = {
    taskList: tasks,
  }

  // design `App` to be the parent component of your application.

  // this component is going to take care of state, and any change handlers you need to work with your state

  add = (taskName) => {
    const newTaskList = {
      taskList: [
        ...this.state.taskList,
        taskName
      ] ,
    }
    
    this.setState(newTaskList)
  }

  complete = (taskId) => {

    const completedTasks = {
      taskList: this.state.taskList.map(task => {
        if(task.id === taskId){
          return {
            ...task,
            completed: !task.completed
          }
        }
       
        return task;
        
      })
    }
    
    this.setState(completedTasks);
    }
  

  clear = () => {
      
    const clearTask = {
      taskList: this.state.taskList.filter(task => {
        return task.completed === false;
      })
    }

    this.setState(clearTask)
  }



  render() {
    return (
      <div className = "App">
       <div className='header'>
          <h2>Welcome to your Todo App!</h2>
          <TodoForm add={this.add} />
        </div>
        <TodoList taskList = {this.state.taskList} complete = {this.complete} clear = {this.clear}/>
      </div>
    );
  }
}

export default App;
