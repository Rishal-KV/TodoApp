import React, {useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
uuidv4()                                                                                                                                               


function TodoWrapper() {
    const [todos, setTodos] = useState([])
    function addTodo(todo){
        setTodos([...todos,{id : uuidv4(), task : todo, completed : false, isEditing : false  }])
      
    }


    //To mark todo
    function toggleComplete(id) {
        setTodos((prevTodos) =>
          prevTodos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }
       

      //To delete Todo

  return (
    <div className='TodoWrapper'>
        <h1>Get things done!</h1>
      <TodoForm addTodo={addTodo}/>
       {
        todos.map((todo,index) => {
           return <Todo task={todo}  key={index} toggleComplete={toggleComplete}  deleteTodo={deleteTodo}/>
        })
       }
    </div>
  )
}

export default TodoWrapper
