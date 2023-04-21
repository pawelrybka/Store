import { useSelector } from 'react-redux';
import styles from './Footer.module.css';
import { RootState } from '../../Redux/Store';

function Footer() {
  const total = useSelector((state: RootState) => state.cart.total);

  return (
    <div className={styles.footer}>
      <span>Total:</span>
      <span>
        {total.toFixed(2)}
        $
      </span>
    </div>
  );
}

export default Footer;
