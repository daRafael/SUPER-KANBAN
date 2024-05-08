import { useParams, Navigate } from "react-router-dom";
import './TaskDetails.css'

export default function TaskDetails ({ tasks }) {
  const { taskId } = useParams();

  //find task
  const task = tasks.find((task) => task.id === taskId);
  
  //if no task return home
  if(!task) {
    return <Navigate to='/' />
  }
  
  return (
    <div className="background">
      <div className="task-details-container">
        <div className="stat-back-edit-container">
          <div>
            {task.status}
          </div>
          <div className="btns-container">
            <button>edit</button>
            <button>back</button>
          </div>
        </div>
        <div className="title-container">
          {task.title}
        </div>
        <div className="description-container">
          {task.description}
        </div>
        <div className="assignee-prio-container">
          <div className="assignee-container">
            {task.assignee}
          </div>
          <div className="prio-container">
            {task.priority}
          </div>
        </div>
        <div className="dates-container">
          <div className="created-date-container">
            Created date
          </div>
          <div className="dueDate-container">
            {task.dueDate}
          </div>
        </div>
      </div>
    </div>
  )

}