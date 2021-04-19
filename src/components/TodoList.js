// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import Todo from "./Todo";


const ToDoList = (props) => {
 
 const clearTasks =  (e) => {
   e.preventDefault();
   props.clear()
 }

return(

  <div className="task-list">
    {props.taskList.map(task => {
     return <Todo task={task} complete={props.complete}/>
    })}

    <button className="clear-btn" onClick={clearTasks}>Clear</button>
  </div>
    
)
 

  
};

export default ToDoList;