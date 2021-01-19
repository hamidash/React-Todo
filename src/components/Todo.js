import React from "react";

const ToDo = (props) => {
  //Returns div whick onClick calls toggleTask function 
  //and passes it as argument task object's id
  //Div's className is determined with ternery as 'task completed' or 'task'
  return (
    <div
      onClick={() => props.toggleTask(props.task.id)}
      className={props.task.completed ? "task completed" : "task"}
    >
      <p>{props.task.taskName}</p>
    </div>
  );
};

export default ToDo;
