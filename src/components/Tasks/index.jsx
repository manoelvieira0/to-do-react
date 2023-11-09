import { Task } from '../Task'
import styles from './Tasks.module.css'

export function Tasks({tasks}){
  const taskQuantity = tasks.length;
  const completedTasks = tasks.filter(task => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>{taskQuantity}</span>
        </div>

        <div className={styles.completedTasks}>
          <p>Concluídas</p>
          <span>{completedTasks} de {taskQuantity}</span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} />;
        })}
      </div>
    </section>
  )
}