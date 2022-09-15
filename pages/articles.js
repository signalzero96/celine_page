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
            {page === '1' && (
              <h1>나는 슬픔을 포착하는 사람이 되기로 했거든. - 눈</h1>
            )}
            {page === '2' && (
              <h1>쪽지를 읽는 시간은 슬픔을 느끼지 못하게 돼. - 마취</h1>
            )}
            {page === '3' && <h1>어느날 내안의 구덩이가 생겼다. - 바캉스</h1>}
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
          </div>
        </div>
      </div>
    </div>
  );
}
