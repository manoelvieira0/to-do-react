import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(taskTitle){
    setTasks([
      ...tasks, 
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false
      }
    ])
  }

  function deleteTask(taskId){
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function toogleTaskCompleted(taskId){
    const newTasks = tasks.map(task => {
      if(task.id === taskId){
        return {
        ...task,
          isCompleted: !task.isCompleted
        }
      }
      return task;
    })
    setTasks(newTasks);
  }

  return (
    <div>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks}
        onDelete={deleteTask}
        onComplete={toogleTaskCompleted}
      />
    </div>
  )
}
