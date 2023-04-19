import styles from './Header.module.css'
import { BsFillBasketFill } from 'react-icons/bs';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h2>Logo</h2>
        <div className={styles.basket}>
          <BsFillBasketFill size={30}/>
          <div className={styles.basket__counter}>0</div>
        </div>
      </div>
    </div>
  )
}

export default Header

