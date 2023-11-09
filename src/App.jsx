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
    }
  ]);

  return (
    <div>
      <Header />
      <Tasks 
        tasks={tasks}
      />
    </div>
  )
}
