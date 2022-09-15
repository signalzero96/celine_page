import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import Seo from '../components/seo';
import styles from '../styles/home.module.css';

export default function Home() {
  const mainRef = useRef();
  const scrollDistRef = useRef();
  const blackMask1Ref = useRef();
  const paperRef = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set(mainRef.current, {
      position: 'fixed',
      background: '#000',
      width: '100%',
      maxWidth: '1200px',
      height: '100%',
      top: 0,
      left: '50%',
      x: '-50%',
    });
    gsap.set(scrollDistRef.current, {
      width: '100%',
      height: '160%',
      position: 'absolute',
    });
    gsap
      .timeline({
        scrollTrigger: {
          trigger: scrollDistRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
      .fromTo(paperRef.current, { y: 0 }, { y: -200 }, 0)
      .fromTo(blackMask1Ref.current, { y: 100 }, { y: -800 }, 0);
  });
  return (
    <div className={styles.home}>
      <Seo title='Home' />
      <div className={styles.scrollDist} ref={scrollDistRef}></div>
      <div className={styles.main} ref={mainRef}>
        <svg viewBox='0 0 1200 800' xmlns='http://www.w3.org/2000/svg'>
          <mask id='m'>
            <g className={styles.black1} ref={blackMask1Ref}>
              <rect fill='#000' width='100%' height='801' y='799' />
              <image xlinkHref='/blackMask1.jpg' width='1200' height='800' />
            </g>
          </mask>
          <text fill='#fff' x='490' y='330'>
            哦 綸
          </text>
          <text fill='#fff' x='375' y='440' className={styles.title}>
            외로움을 맡아드립니다
          </text>
          <g className={styles.texts} mask='url(#m)'>
            <rect fill='#fff' width='100%' height='100%' />
            <text x='415' y='330' fill='#000'>
              CELINE
            </text>
            <text fill='#000' x='310' y='440' className={styles.subtitle}>
              외로움을 끌어안는 열 개의 외로움들
            </text>
          </g>
        </svg>
      </div>
    </div>
  );
}
