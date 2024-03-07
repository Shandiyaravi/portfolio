import React from 'react';

import styles from './Hero.module.css';
import heroImage from '../../../assets/heroimage.png';

const Hero = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>SHANDIYA RAVICHANDRAN</h1>
          <p className={styles.description}>
            I'm a frontend developer student at HyperIsland looking for
            opportunities to work with you! Reach out if you'd like to know
            more!
          </p>
          <a href='mailto:shandiyaravi@gmail.com' className={styles.contactBtn}>
            Hire Me
          </a>
        </div>
        <img
          src={heroImage}
          alt='Hero image of me'
          className={styles.heroImg}
        />
      </div>
    </section>
  );
};

export default Hero;
