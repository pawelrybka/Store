import styles from './Header.module.css'

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h2>Logo</h2>
      </div>
    </div>
  )
}

export default Header

