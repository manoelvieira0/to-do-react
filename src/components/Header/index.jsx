import styles from './Header.module.css'

import logoSvg from '../../assets/Logo.svg'
import { PlusCircle } from '@phosphor-icons/react/dist/ssr'
import { useState } from 'react';

export function Header({onAddTask}) {
  const [title, setTitle] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    onAddTask(title);
    setTitle("");
  }

  function onChangeTitle(event){
    setTitle(event.target.value);
  }

  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logotipo da aplicação" />

      <form className={styles.newTaskForm} onSubmit={handleSubmit}>
        <input placeholder='Adicione uma nova tarefa' onChange={onChangeTitle} value={title}/>
        <button>
          Criar
          <PlusCircle size={20}/>
        </button>
      </form>
    </header>
  )
}