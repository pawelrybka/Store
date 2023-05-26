import Header from './components/header/header';
import Main from './components/main/main';
import styles from './page.module.css';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <div className={styles.root}>
      <Header />
      <Main products={products} />
    </div>
  );
}
