import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/navBar.module.css';

export default function NavBar() {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <Link href='/'>
          <a className={router.pathname === '/' ? styles.active : ''}>HOME</a>
        </Link>
        <Link href='/articles'>
          <a className={router.pathname === '/articles' ? styles.active : ''}>
            ARTICLES
          </a>
        </Link>
        <Link href='/aboutus'>
          <a className={router.pathname === '/aboutus' ? styles.active : ''}>
            ABOUT US
          </a>
        </Link>
      </div>
      <style jsx>{`
        a {
          text-decoration: none;
          margin: 10%;
        }
      `}</style>
    </nav>
  );
}
