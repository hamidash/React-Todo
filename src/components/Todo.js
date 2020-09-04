import React from "react";

function Task(props) {
  return (
    <div
      onClick={() => props.completeTask(props.task.id)}
      className={`task${props.task.completed ? " completed" : ""}`}
    >
      <h3>{props.task.taskName}</h3>
    </div>
  );
}

export default Task;
