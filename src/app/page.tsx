import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Header from './components/header/header';
import Main from './components/main/main';
import styles from './page.module.css';

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <div className={styles.root}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Main />
      </QueryClientProvider>
    </div>
  );
}
