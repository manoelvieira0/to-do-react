import { useState } from 'react'
import { Header } from './components/Header'
import { Tasks } from './components/Tasks'
import './global.css'

export function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Estudar',
      isCompleted: false
    },
    {
      id: 2,
      title: 'Ler',
      isCompleted: true
    }
  ]);

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

  return (
    <div>
      <Header onAddTask={addTask}/>
      <Tasks 
        tasks={tasks}
      />
    </div>
  )
}
