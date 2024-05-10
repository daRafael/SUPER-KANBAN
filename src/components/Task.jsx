import { Link } from 'react-router-dom';
import './Task.css'

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Task({ id, task, deleteTask }) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({id: id});

  const style = {
    transform: CSS.Transform.toString(transform)
  }  

  return (
    <div 
      ref={setNodeRef} 
      style={style}
      className="task-container"
    >
      <div
        {...attributes}
        {...listeners}
        className='drag-container'
      >
        <div className='drag-container-vs'></div>
      </div>
      <div className='task-info'>
        <div className='prio-del-container'>
          {`${task.priority} Priority`}
          <button 
            onClick={() => { 
              deleteTask(id)
            }} 
            className='delete-task-btn'
          >
            <img className='cross-icon' src="/images/cross-icon.png" alt="cross-icon" />
          </button>
        </div>
        <div className='task-inpect-container'>
          <div className='task-card-title'>
          {task.title}
          </div>
          <Link to={`/tasks/${task.id}`}>
            <button className='inspect-task-btn'>
              <img className='inspect-icon' src="/images/inspect-icon.png" alt="inpect" />
            </button>
          </Link>
        </div>
        <div className='assignee-container'>
          {`Assigned to: ${task.assignee}`}
        </div>
      </div>
      
    </div>
  )
}