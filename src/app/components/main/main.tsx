/* eslint-disable @next/next/no-img-element */
import Footer from '../footer/footer';
import styles from './main.module.css';
import { Product } from '@/app/types';
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

function Main({ products }: { products: Product[] }) {
  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.content}>
          {products.map(product => (
            <div key={product.id} className={styles.product}>
              <div className={styles.product__info}>
                <img
                  src={product.image}
                  alt={product.category}
                  className={styles.product__image}
                />
                <div>
                  <h3>{product.category}</h3>
                  <p>{product.price}$</p>
                </div>
              </div>
              <div className={styles.product__quantity}>
                <MdOutlineKeyboardArrowUp size={30} />

                <MdOutlineKeyboardArrowDown size={30} />
              </div>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
