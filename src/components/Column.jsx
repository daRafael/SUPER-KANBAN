//dnd-kit
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable'

import Task from './Task'
import './Column.css'

export default function Column({ tasks }) {
  return (
    <div className="column">
      <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} id={task.id}/>
        })}
      </SortableContext>
    </div>
  )
}