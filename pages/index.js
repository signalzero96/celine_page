import Seo from '../components/seo';
import styles from '../styles/home.module.css';

export default function Home() {
  return (
    <div>
      <Seo title='Home' />
      <div className={styles.main}>
        <div className={styles.slider}>
          <h1>Home</h1>
        </div>
      </div>
    </div>
  );
}
