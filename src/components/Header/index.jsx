import styles from './Header.module.css'

import logoSvg from '../../assets/Logo.svg'

export function Header(){
  return (
    <header className={styles.header}>
      <img src={logoSvg} alt="Logotipo da aplicação" />
    </header>
  )
}