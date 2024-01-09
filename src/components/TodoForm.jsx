import React,{useState} from 'react'

function TodoForm({addTodo}) {
    const [value, setValue] = useState("")
    function handleSubmit(e){
        e.preventDefault()
        addTodo(value)
        setValue('')
  
    }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input value={value} onChange={(e)=> setValue(e.target.value)} type="text" className='todo-input'  placeholder='what is the task today'/>
       
        <button type='submit' className='todo-btn'>
        Add Task
        </button>
    </form>
  )
}

export default TodoForm
