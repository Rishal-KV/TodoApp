import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';    

function Todo({task, toggleComplete, deleteTodo}) {
    console.log(task)
  return (
    <div className='Todo'>
        <p onClick={()=> toggleComplete(task.id)} className = {`${task.completed ? "completed" : ""}`}>{task.task}</p>
        
      <div>
 <FontAwesomeIcon icon={faEdit} />
 <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  )
}

export default Todo
