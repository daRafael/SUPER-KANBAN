import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';

//database
import tasksData from './assets/board-tasks.json';

//styles
import './App.css'

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AddTask from './AddTask';
import Column from './components/Column';
import Footer from './components/Footer';

//pages
import HomePage from './HomePage';
import TaskDetails from "./TaskDetails";
import AboutPage from "./AboutPage";



export default function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [columns, setColumns] = useState([]);
  

  useEffect(() => {
    setColumns([
      { id:'column1', title: 'To do', tasks: tasks.filter(task => task.status === 'To Do') },
      { id:'column2', title: 'In Progress', tasks: tasks.filter(task => task.status === 'In Progress') },
      { id:'column3', title: 'Done', tasks: tasks.filter(task => task.status === 'Done') },
    ])
  }, [tasks]);


  return (
      <div className='app'>
        <Navbar />
        <Sidebar />
        <div className='main-container'>
          <Routes>
            <Route 
              path="/" 
              element={
              <HomePage 
                tasks={tasks} 
                columns={columns} 
                setTasks={setTasks} 
                setColumns={setColumns}
              />} 
            />
            <Route 
              path="/tasks/:taskId" 
              element={
              <TaskDetails 
                tasks={tasks} 
              />} 
            />
            <Route 
              path="/about"
              element={
                <AboutPage/>
              }
            />
          </Routes>
        </div>
        <Footer />
      </div>
  );
} 
