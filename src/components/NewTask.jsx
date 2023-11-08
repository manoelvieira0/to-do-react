import { PlusCircle } from '@phosphor-icons/react'
import styles from './NewTask.module.css'

export function NewTask(){
  return (
    <div className={styles.newtask}>
      <input placeholder='Adicione uma nova tarefa'/>
      <button type='submit'>
        Criar
        <PlusCircle size={18}/>
      </button>
    </div>
  )
}