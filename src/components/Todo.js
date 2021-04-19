import React from 'react';


const Todo = (props) => {
    
    const togleTask = (e) => {
        e.preventDefault()
        props.complete(props.task.id)
    }
    
    
    return (
        <div onClick={togleTask} className ={`task ${props.task.completed ? "completed":""}`}>
            <p>
               {props.task.taskName} 
            </p>
        </div>
    )
}

export default Todo;

