import { useState } from "react"

export default function AddTask( addNewTask, students) {
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
  }

  const handleAssigneeChange = (e) => {
    setAssignee(e.target.value);
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  }

  const handleSatusChange = () => {
    setStatus(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!title || !description || !assignee) {
      alert('Please fill all fields!')
    }

    const id = students.length + 1;
    const d = new Date();
    createdDate = d.valueOf();

    addNewTask({ id, title, description, assignee, status, priority, createdDate })
  }

  
  return (
    <div className="background-container">

      <div className="add-task-container">
        <div className="title">
          Add New Task
        </div>
        <form>
          <input 
            type="text" 
            name="title" 
            value={title}
            onChange={handleTitleChange}
            placeholder="Task title"
          />

          <input name="description" value={description} onChange={handleDescriptionChange} placeholder="Task description"/>

          <div>
            <input name="assingnee" value={assignee} onChange={handleAssigneeChange} placeholder="Assign it to someone!"/>

            <select name="priority" value={priority} onChange={handlePriorityChange}>
              <option value=''>Select Priority</option>
              <option value='Low'>Low</option>
              <option value='Medium'>Medium</option>
              <option value='High'>High</option>
            </select>

          </div>

          <select name="status" value={status} onChange={handleSatusChange}>
            <option value='To Do'>To Do</option>
            <option value='In Progress'>In Progress</option>
            <option value='Done'>Done</option>
          </select>

          <button onClick={handleSubmit} type="sumbit">Add</button>
        </form>
      </div>

    </div>
  )
}