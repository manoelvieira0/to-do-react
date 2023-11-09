import { Trash } from '@phosphor-icons/react'
import styles from './Task.module.css'

export function Task({ task }) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>
      <p>{task.title}</p>
      <button className={styles.deleteButton}>
        <Trash />
      </button>
    </div>
  )
}