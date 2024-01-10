import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function EditTodo({ editTodo, task }) {
  const [value, setValue] = useState(task.task);


  function handleSubmit(e) {
    e.preventDefault();
        editTodo(value, task.id)
           
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='todo-input'
        placeholder='Update Task'
      />

      <button type='submit' className='todo-btn'>
        Update Task
      </button>
      

 

    </form>
  );
}

export default EditTodo;


