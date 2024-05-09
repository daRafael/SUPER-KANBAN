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
              <button className="task-details-edit-button">
                <img 
                  className="task-detaisls-edit-icon" 
                  src="/src/assets/images/edit-icon.png" 
                  alt="edit-pencil-icon" 
                />
              </button>
            </Link>
            <Link to='/'>
              <button className="task-details-close-button">
                <img 
                  className="task-details-cross-icon" 
                  src="/src/assets/images/cross-icon.png" 
                  alt="cross-icon"
                />
              </button>
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