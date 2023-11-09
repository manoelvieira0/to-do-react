import { Task } from '../Task'
import styles from './Tasks.module.css'
import {TbClipboardText} from 'react-icons/tb';

export function Tasks({tasks, onDelete, onComplete}){
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
          return <Task key={task.id} task={task} onDelete={onDelete} onComplete={onComplete}/>;
        })}

        {tasks.length <= 0 && (
          <section className={styles.empty}>
            <TbClipboardText size={50}/>
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus itens a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  )
}