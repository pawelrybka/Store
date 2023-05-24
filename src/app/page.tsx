import Header from './components/header/header';
import Main from './components/main/main';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.root}>
      <Header />
      <Main />
    </div>
  );
}
