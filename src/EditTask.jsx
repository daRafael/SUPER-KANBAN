import { useState } from "react"
import { Link, useParams, useNavigate, Navigate } from "react-router-dom";
import './EditTask.css'

export default function EditTask({ addNewTask, tasks }) {
  const { taskId } = useParams();
  const task = tasks.find((task) => task.id === taskId);

  if(!task) return <Navigate to='/'/>

  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [assignee, setAssignee] = useState(task.assignee);
  const [priority, setPriority] = useState(task.priority);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate);
 
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

  const handleStatusChange = () => {
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

    const id = tasks.length + 1;
    const createdDate = Date.now();

    addNewTask({ id, title, description, assignee, status, priority, createdDate, dueDate });

    // Reseting form fields after adding a new task
    setTitle('');
    setDescription('');
    setAssignee('');
    setPriority('Medium');
    setStatus('To Do');
    setDueDate('');
    }

    const resizeTextarea = (element) => {
      element.style.height = 'auto'; // Reset height to auto to properly calculate new height
      element.style.height = element.scrollHeight + 'px'; // Set height to scrollHeight to fit content
    };

  
  return (
    <div className="background-overlay">

      <div className="edit-task-container">
        <div className="close-btn-container">
          <button>X</button>
        </div>
        <form className="edit-form">
          <select
            className="prio-input" 
            name="priority" 
            value={priority} 
            onChange={handlePriorityChange}
          >
            <option value=''>Select Priority</option>
            <option value='Low'>Low</option>
            <option value='Medium'>Medium</option>
            <option value='High'>High</option>
          </select>
          <input
            className="title-input"
            type="text" 
            name="title" 
            value={title}
            onChange={handleTitleChange}
            placeholder="Task title"
          />

          <textarea 
            className="description-input"
            name="description"
            cols='40'
            rows='2'
            value={description}
            onChange={handleDescriptionChange} 
            placeholder="Task description"
          />

          <div className="assignee-prio-container-iputs">
            <input
              className="assignee-input" 
              name="assingnee" 
              value={assignee} 
              onChange={handleAssigneeChange} 
              placeholder="Assign it to someone!"
            />

            <select
              className="prio-input" 
              name="priority" 
              value={priority} 
              onChange={handlePriorityChange}
            >
              <option value=''>Select Priority</option>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>
          </div>

          <div className="status-date-container-inputs">
            <select
              className="status-input" 
              name="status" 
              value={status} 
              onChange={handleStatusChange}
            >
              <option value='To Do'>To Do</option>
              <option value='In Progress'>In Progress</option>
              <option value='Done'>Done</option>
            </select>

            <input
              className="date-input"
              type="date"
              name="dueDate"
              value={dueDate}
              onChange={handleDueDateChange}
            />
          </div>
          <div className="submit-task-btn-container">
            <button 
              className="submit-task-btn" 
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