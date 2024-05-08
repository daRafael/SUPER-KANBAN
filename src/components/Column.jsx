//dnd-kit
import { SortableContext } from '@dnd-kit/sortable'
import { useDroppable } from '@dnd-kit/core'

import Task from './Task'
import './Column.css'

export default function Column({ id, title, tasks, deleteTask }) {
  const { setNodeRef } = useDroppable({ id: id })

  return (
    <SortableContext id={id} items={tasks}>
      <div ref={setNodeRef} className="column">
        <div className='title'>
          {title}
        </div>
          {tasks.map((task) => {
            return <Task key={task.id} task={task} id={task.id} deleteTask={deleteTask}  />
          })}          
      </div>
    </SortableContext>
  )
}