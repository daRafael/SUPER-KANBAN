import { useState } from "react"
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import './EditTask.css'

export default function EditTask({ setTasks, tasks }) {
  const { taskId } = useParams();

  const task = tasks.find((task) => task.id === taskId);

  if(!task) return <Navigate to='/'/>

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const navigate = useNavigate();
 
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
    resizeTextarea(e.target);
  }

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value);
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  }

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  }

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !description || !assignee) {
      alert('Please fill all fields!')
      return;
    } 

    const updatedTasks = tasks.map((task) => {
      if(task.id === taskId) {
        return { id: taskId, title, description, assignee, status, priority }
      }
      return task;
    });

    setTasks(updatedTasks)

    navigate(`/tasks/${taskId}`);
  }

  const resizeTextarea = (element) => {
    element.style.height = 'auto'; // Reset height to auto to properly calculate new height
    element.style.height = element.scrollHeight + 'px'; // Set height to scrollHeight to fit content
  };

  
  return (
    <div className="background">

      <div className="edit-task-container">
        <div className="edit-back-btn-container">
          <Link to={`/tasks/${task.id}`}>
            <button className="edit-task-close-btn">
              <img 
                className="edit-task-cross-icon" 
                src="/src/assets/images/cross-icon.png" 
                alt="cross-icon" 
              />
            </button>
          </Link>
        </div>
        <form className="edit-form">
          <div>
            <select
              className="status-edit-input" 
              name="status" 
              value={status} 
              onChange={handleStatusChange}
            >
              <option value='To Do'>To Do</option>
              <option value='In Progress'>In Progress</option>
              <option value='Done'>Done</option>
            </select>
          </div>
          <input
            className="title-edit-input"
            type="text" 
            name="title" 
            value={title}
            onChange={handleTitleChange}
            placeholder="Task title"
          />

          <textarea 
            className="description-edit-input"
            name="description"
            cols='55'
            rows='1'
            value={description}
            onChange={handleDescriptionChange} 
            placeholder="Task description"
          />

          <div className="assignee-prio-edit-container-iputs">
            <div className="assignee-edit-container">
              <div>
                Assigned to:
              </div>
              <input
                className="assignee-edit-input" 
                name="assingnee" 
                value={assignee} 
                onChange={handleAssigneeChange} 
                placeholder="Assign it to someone!"
              />
            </div>
            <div className="prio-edit-container">
              <div>
                Task Priority:
              </div>
              <select
                className="prio-edit-input" 
                name="priority" 
                value={priority} 
                onChange={handlePriorityChange}
              >
                <option value='Low'>Low</option>
                <option value='Medium'>Medium</option>
                <option value='High'>High</option>
              </select>
            </div>
          </div>
          <div className="submit-edit-btn-container">
            <button 
              className="submit-edit-btn" 
              onClick={handleSubmit} 
              type="sumbit"
            >
              Confirm
            </button>
          </div>

          
        </form>
      </div>

    </div>
  )
}