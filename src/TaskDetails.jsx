import { useParams, Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
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
          <div className="status-container">
            {task.status}
          </div>
          <div className="btns-inspect-container">
            <Link to={`/tasks/${task.id}/edit`}>
              <button>edit</button>
            </Link>
            <Link to='/'>
              <button>back</button>
            </Link>
          </div>
        </div>
        <div className="title-inspect-task-container">
          {task.title}
        </div>
        <div className="description-container">
          {task.description}
        </div>
        <div className="assignee-prio-container">
          <div className="assignee-container">
            Assinged: <span>{task.assignee}</span>
          </div>
          <div className="prio-container">
            Task Priority: <span>{task.priority}</span>
          </div>
        </div>
        <div className="due-date-container">
          <div>
            Due Date
          </div>
          {task.dueDate}
        </div>
      </div>
    </div>
  )

}