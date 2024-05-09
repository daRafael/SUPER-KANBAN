import { useState } from "react"
import { Link } from "react-router-dom";
import './AddTask.css'

export default function AddTask({ addNewTask, tasks, showAddTaskForm, setShowAddTaskForm }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('Medium');
  const [status, setStatus] = useState('To Do');
  const [dueDate, setDueDate] = useState('')
 
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

      <div className="add-task-container">
        <div className="title-add-task-container">
          New Task
        </div>
        <div className="back-btn-container">
          <button 
            className="back-btn"
            onClick={()=>{
              setShowAddTaskForm(!showAddTaskForm)
            }}
          >
            <img className="cross-add-task-icon" src="src/assets/images/cross-icon.png" alt="cross-icon" />
          </button>
        </div>
        <form className="form">
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
              Add
            </button>
          </div>

          
        </form>
      </div>

    </div>
  )
}