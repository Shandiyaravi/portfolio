import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.wrapper} id='About'>
      <h2 className={styles.heading}>Who Am I?</h2>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>Harmony Enthusiast🌿</li>
          <li>Curious Explorer🌍</li>
          <li>Creative Thinker💡</li>
          <li>Plant Lover🪴</li>
          <li>Passionate Dog Enthusiast 🐾</li>
          <li>Collaborative Team Player 🤝</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
