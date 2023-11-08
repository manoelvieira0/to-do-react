import { PlusCircle, Trash } from '@phosphor-icons/react'
import styles from './NewTask.module.css'

export function NewTask() {
  return (
    <div className={styles.main}>

      <div className={styles.newtask}>
        <input placeholder='Adicione uma nova tarefa' />
        <button type='submit'>
          Criar
          <PlusCircle size={18} />
        </button>
      </div>

      <div className={styles.tasks}>
        <div className={styles.headertask}>
          <div className={styles.taskscreated}>
            <p>Tarefas criadas</p>
            <span>5</span>
          </div>
          <div className={styles.taskcompleted}>
            <p>Concluídas</p>
            <span>2 de 5</span>
          </div>
        </div>
      </div>

      <div className={styles.tasklist}>
        <div className={styles.task}>
          <div className={styles.checkboxWrapper}>
            <input type="checkbox" id='checkbox-1' />
            <label htmlFor='checkbox-1'></label>
          </div>

          <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
          <button title='Deletar tarefa'>
            <Trash size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}