//React
import { useEffect, useState } from 'react';

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
import Task from './components/Task';


export default function App() {
  const [tasks, setTasks] = useState(tasksData);
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    setColumns([
      { id:'column1', title: 'To do', tasks: tasks.filter(task => task.status === 'To Do') },
      { id:'column2', title: 'In Progress', tasks: tasks.filter(task => task.status === 'In Progress') },
      { id:'column3', title: 'Done', tasks: tasks.filter(task => task.status === 'Done') },
    ])
  }, [tasks])


  const addNewTask = (task) => {
    setTasks([...tasks, task]);  
  }
    
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => {
      console.log('tasks are being filtered')
      return task.id !== taskId;
    });

    setTasks(updatedTasks);
  }

  //finding the column with given taskID
  const findColumn = (id) => {
    if(!id) {
      return null;
    }

    // Check if the ID corresponds to a column ID
    if (columns.some((column) => column.id === id)) {
      // Return the column with the matching ID
      return columns.find((column) => column.id === id) || null;
    }

    // If the ID corresponds to a task ID, find the associated column
    for (const column of columns) {
      if (column.tasks.some(task => task.id === id)) {
        return column;
      }
    }
    return null;
  }

 /*  //finding the column with given taskID
  const findColumn = (taskId) => {
    for (const column of columns) {
      if (column.tasks.some(task => task.id === taskId)) {
        return column;
      }
    }
    return null;
  } */

  const handleDragOver = (event) => {
    //extracting Ids and Columns 
    const { active, over, delta} = event;
    const activeId = active.id;
    const overId = over ? over.id : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);

    //column validation
    if(!activeColumn || !overColumn || activeColumn === overColumn) {
      return null;
    }

    //updating columns
    setColumns((columns) => {
      //extracting active and over task index from tasks arrays
      const activeTasks = activeColumn.tasks;
      const overTasks = overColumn.tasks;
      const activeIndex = activeTasks.findIndex((task) => task.id === activeId);
      const overIndex = overTasks.findIndex((task) => task.id === overId);
      
      //this function calculates the index where the active task should be inserted into the over column based on
      //its position relative to other tasks and the drag direction (delta.y).
      const newIndex = () => {
        //determine condition if it should be placed below last task //delta.y refers to the vertical change in position. 
        //If it moves up d.y will be nagative, if downwards positive, if no vertical mov = 0
        const putBelowLastTask = overIndex === overTasks.length - 1 && delta.y > 0; 
        const modifier = putBelowLastTask ? 1 : 0; // calculates modifier if prev condition true, mod is 1 if false mod is 0
        return overIndex >= 0 ? overIndex + modifier : overTasks.length + 1; // calculate new index where the active task should be inserted
      };

      return columns.map((column) => {
        //this code is removing the active task from original column
        //it calculates the index where the active task should be inserted using the newIndex()
        //it constructs the new task array for the over column, inserting the active task at the calcualted index
        //it returns a new array of columns where the updated columns are replaced with their modified versions, the rest reamins unchanged.
        if(column.id === activeColumn.id) {
          column.tasks = activeTasks.filter((task) => task.id !== activeId);
          return column;
        } else if (column.id === overColumn.id) {
          column.tasks = [
            ...overTasks.slice(0, newIndex()),
            activeTasks[activeIndex],
            ...overTasks.slice(newIndex(), overTasks.length)
          ];
          return column;
        } else {
          return column;
        }
      });
    });
  };

  const handleDragEnd = event => {
    //extracting Ids and columns
    const {active, over} = event
    const activeId = active.id;
    const overId = over ? over.id : null;
    const activeColumn = findColumn(activeId);
    const overColumn = findColumn(overId);

    //column validation
    if(!activeColumn || !overColumn || activeColumn !== overColumn) {
      return null;
    }
    
    //extracting index of active and over task from each task arrays
    const activeIndex = activeColumn.tasks.findIndex((task) => task.id === activeId);
    const overIndex = overColumn.tasks.findIndex((task) => task.id === overId);

    //if the task and over task are not the same index, it updates the columns state
    if(activeIndex !== overIndex) {
      setColumns((columns) => {
        return columns.map((column) => {
          if(column.id === activeColumn.id) {
            //dnd-kit method. It moves the active task within the over column's tasks array from its original pos to pos where it was dropped.
            //for other columns, it leaves it unchanged
            column.tasks = arrayMove(overColumn.tasks, activeIndex, overIndex);
            return column;
          } else {
            return column;
          }
        });
      });
    }
  }

  //idk Y, but if a column becomes empty we cannot move any other task inside it.
  //trying to debug it for the last 2 days, elp

  return (
    <div className='app'>
      <Navbar />
      <div className='main-container'>
        <Sidebar/>
        <div className='board-container'>
          <div className='input-container'>
            super kanban input
          </div>
          <div className='columns-container'>
            <DndContext
              onDragOver={handleDragOver} 
              onDragEnd={handleDragEnd} 
              collisionDetection={closestCorners}
            >
              {columns.map((column) => {
                return (
                  <Column 
                    key={column.id} 
                    id={column.id} 
                    title={column.title} 
                    tasks={column.tasks}
                    deleteTask={deleteTask}                               
                  />
                ) 
              })}
            </DndContext>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 
