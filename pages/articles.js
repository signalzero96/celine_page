import { useEffect, useState } from 'react';
import Seo from '../components/seo';
import styles from '../styles/articles.module.css';

export default function Articles() {
  const [page, setPage] = useState('1');

  const onPageChanged = (e) => {
    setPage(e.currentTarget.id);
  };

  return (
    <div className={styles.main}>
      <Seo title='ARTICLES' />
      <div className={styles.slider}>
        <div className={styles.slider_inner}>
          <div className={styles.slider_content}>
            {page === '1' && <h1>page1!</h1>}
            {page === '2' && <h1>page2!</h1>}
            {page === '3' && <h1>page3!</h1>}
            {page === '4' && <h1>page4!</h1>}
          </div>
          <div className={styles.slider_pagination}>
            <button
              id='1'
              className={page === '1' ? styles.active : ''}
              onClick={onPageChanged}
            ></button>
            <button
              className={page === '2' ? styles.active : ''}
              onClick={onPageChanged}
              id='2'
            ></button>
            <button
              className={page === '3' ? styles.active : ''}
              onClick={onPageChanged}
              id='3'
            ></button>
            <button
              className={page === '4' ? styles.active : ''}
              onClick={onPageChanged}
              id='4'
            ></button>
          </div>
        </div>
      </div>
    </div>
  );
}
