// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Task from './Todo'

function TodoList(props) {
    return(
        <div>
            {props.tasks.map(task => {
                return(
                    <Task key = {task.id} task = {task}  completeTask = {props.completeTask}/>
                )
            })}
            

        </div>
    )
}

export default TodoList;