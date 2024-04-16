import React, { useState, useEffect } from 'react';
import styles from './BackToTop.module.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 20) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={styles.backToTopBtn}
      style={{ display: isVisible ? 'block' : 'none' }}
      onClick={scrollToTop}
    >
      <img src='../assets/arrow.png'></img>
    </button>
  );
};

export default BackToTop;
