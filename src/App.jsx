//React
import { useState } from 'react';

//dnd-kit
import { DndContext, closestCorners } from '@dnd-kit/core';
import { arrayMove } from '@dnd-kit/sortable';

//database
import tasksData from './assets/board-tasks.json';

//styles
import './App.css'

//components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Column from './components/Column';
import Footer from './components/Footer';


export default function App() {
  const [tasks, setTasks] = useState(tasksData);

  //finds and returns the index of a given id
  const getTaskPosition = id => tasks.findIndex(task => task.id === id);

  const handleDragEnd = event => {
    //active is the current element being dragged
    //over is the element that is going to be replaced
    const {active, over} = event

    if(active.id === over.id) return;

    setTasks(tasks => {
      const originalPosition = getTaskPosition(active.id);
      const newPosition = getTaskPosition(over.id);

      return arrayMove(tasks, originalPosition, newPosition);
    })
  }

  return (
    <div className='app'>
      <Navbar />
      <div className='main-container'>
        <Sidebar/>
        <div className='board-container'>
          <div className='input-container'>
            super kanban input
          </div>
          <DndContext onDragEnd={handleDragEnd} collisionDetection={closestCorners}>
            <div className='columns-container'>
              <Column tasks={tasks}/>
            </div>
          </DndContext>

        </div>
      </div>
      <Footer />
    </div>
  );
} 
