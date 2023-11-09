import { Trash, CheckCircle } from '@phosphor-icons/react'
import styles from './Task.module.css'
import {BsFillCheckCircleFill} from 'react-icons/bs'

export function Task({ task, onDelete, onComplete }) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer} onClick={() => onComplete(task.id)}>
        {task.isCompleted ? <BsFillCheckCircleFill/> : <div />}
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton} onClick={() => onDelete(task.id)}>
        <Trash />
      </button>
    </div>
  )
}