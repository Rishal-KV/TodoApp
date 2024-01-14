import React, {useEffect, useState} from 'react'
import TodoForm from './TodoForm'
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodo from './EditTodo'


        
uuidv4()                                                                                                                                               


function TodoWrapper() {
  let LOCAL_STORAGE_KEY = "Todo"
    const [todos, setTodos] = useState([])
    
    function addTodo(todo){
        setTodos([...todos,{id : uuidv4(), task : todo, completed : false, isEditing : false  }])
      
    }
    useEffect(() => {
      if (todos.length > 0) {localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))}
    }, [todos])
  

  useEffect(() => {
  const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  
  if (storedTodos && Array.isArray(storedTodos)) {
    setTodos(storedTodos);
  }
}, []);


    //To mark todo
    function toggleComplete(id) {
        setTodos((todos) =>
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      }
       

      //To delete Todo
      function deleteTodo(id) {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
      }
      

      //edit Todo
      const editTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
          )
        );
      }

      const editTask = (task, id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };

  return (
    <div className='TodoWrapper'>
 
        <h1>Get things done!</h1>
      <TodoForm todos={todos} addTodo={addTodo}/>
       {
        todos.map((todo,index) => 
        todo.isEditing ?(
            <EditTodo editTodo={editTask} task={todo}/>
        ) : (
          <Todo task={todo}  key={index} toggleComplete={toggleComplete}  deleteTodo={deleteTodo} editTodo={editTodo}/>
        )
         
        )
       }
       
    </div>
  )
}

export default TodoWrapper
