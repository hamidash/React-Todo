// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo'

/*1. Function to create a Div to hold all tasks in it.
      - Map over tasks data (which is passed from App.js as a prop) and create a new "Task" for each item in the tasks data
      - Task component gets the id of each task(item from Tasks data) as its key
      - Task component also gets 2 props from TodoList.js: 
            -each task object (from our map function) 
            -completeTask function which is passed from App.js as props
*/
function TodoList(props) {
    return(
        <div className="tasks">
            {props.tasks.map(task => {
                return(
                    <Task key = {task.id} task = {task}  completeTask = {props.completeTask}/>
                )
            })}
            

        </div>
    )
}

export default TodoList;