import Seo from '../components/seo';
import styles from '../styles/aboutus.module.css';

export default function Aboutus() {
  return (
    <div>
      <Seo title='ABOUT US' />
      <div className={styles.main}>
        <div className={styles.slider}>
          <h1>About us</h1>
        </div>
      </div>
    </div>
  );
}
