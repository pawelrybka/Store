import Footer from '../footer/footer';
import styles from './main.module.css';

function main() {
  return (
    <div className={styles.main}>
      <div className={styles.main__content}>
        <div className={styles.content}>
          <h3>Main</h3>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default main;
