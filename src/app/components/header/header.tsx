import styles from './header.module.css';

function header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__container}>
        <h3>Logo</h3>
      </div>
    </div>
  );
}

export default header;
