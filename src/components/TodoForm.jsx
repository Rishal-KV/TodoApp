import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function TodoForm({ addTodo, todos }) {
  const [value, setValue] = useState('');


  function handleSubmit(e) {
    e.preventDefault();


    if (value == '') {
      toast.error('Please add a Todo', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      const alreadyAdded = todos.some((todo) => todo.task.includes(value));


      if (alreadyAdded) {
        toast('🦄 Task Already Added!', {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setValue('');
      } else {




        addTodo(value);
        setValue('');


      }
    }
  }

  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        className='todo-input'
        placeholder='What is the task today'
      />

      <button type='submit' className='todo-btn'>
        Add Task
      </button>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
      
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="dark"
      />

      <ToastContainer />
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
      
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

    </form>
  );
}

export default TodoForm;


