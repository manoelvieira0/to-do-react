import styles from './Header.module.css'

import logoSvg from '../../assets/Logo.svg'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logotipo da aplicação" />

      <form className={styles.newTaskForm}>
        <input placeholder='Adicione uma nova tarefa' />
        <button>
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}