import './Task.css'

import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Task({ id, task }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({id});

  const style = {
    transition,
    transform: CSS.Transform.toString(transform)
  }

  return (
    <div 
      ref={setNodeRef} 
      {...attributes}
      {...listeners}
      style={style}
      className="task"
    >
      {task.title}
    </div>
  )
}