import React, { useState } from "react";

const TodoForm = (props) => {

  //2. Declare form state
  const [task, setTask] = useState('');

 
  const changeHandler = (e) => {
     setTask(e.target.value);
  }

  //3.When form is submited it calles 'addTask' fuction from props and updates App's state 
  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("test");
    props.addTask(task);
    setTask('');
  }

  //1.Return 'header' with h1 and a form 
  return (
    <div className='header'>
      <h1>ToDo List</h1>
      <form action="" onSubmit = {submitHandler}>
        <input type="text" value = {task} onChange = {changeHandler}/>
        <button>Add task</button>
      </form>
    </div>
  )
}

export default TodoForm;


