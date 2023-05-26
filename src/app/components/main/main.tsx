import Footer from '../footer/footer';
import styles from './main.module.css';
import { Product } from '@/app/types';

function Main({ products }: { products: Product[] }) {
  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.content}>
          <h3>Main</h3>
          <div>
            {products.map(product => (
              <div key={product.id}>
                <p>
                  <strong>{product.category}</strong>
                </p>
                <p>{product.description}</p>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Main;
