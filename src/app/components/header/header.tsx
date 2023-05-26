import { BsFillBasketFill } from 'react-icons/bs';
import styles from './header.module.css';

function header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <h2>Store</h2>
        <div className={styles.basket}>
          <BsFillBasketFill size={30} />
        </div>
      </div>
    </div>
  );
}

export default header;
