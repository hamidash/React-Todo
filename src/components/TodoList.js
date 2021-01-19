// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from "react";
import ToDo from "./Todo";

const ToDoList = (props) => {
  return (
    <div>
      <p className="list">
        {props.tasks.map((task) => {
          return (
            <ToDo key={task.id} task={task} toggleTask={props.toggleTask} />
          );
        })}
      </p>

      <button onClick={() => props.clearTask()}>Clear Done Tasks</button>
    </div>
  );
};

export default ToDoList;
