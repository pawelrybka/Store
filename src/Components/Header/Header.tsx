import { BsFillBasketFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { RootState } from '../../Redux/Store';
import styles from './Header.module.css';

function Header() {
  const quantities = useSelector((state: RootState) => state.quantity);
  const totalQuantity = Object.values(quantities).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <h2>Logo</h2>
        <div className={styles.basket}>
          <BsFillBasketFill size={30} />
          <div className={styles.basket__counter}>{totalQuantity}</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
