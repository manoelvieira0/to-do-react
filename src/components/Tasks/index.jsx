import styles from './Tasks.module.css'

export function Tasks(){
  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div className={styles.createdTasks}>
          <p>Tarefas criadas</p>
          <span>5</span>
        </div>

        <div className={styles.completedTasks}>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
    </section>
  )
}