import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.wrapper} id='About'>
      <h2 className={styles.heading}>Who Am I?</h2>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li>Adaptive Learner 📚</li>
          <li>Resilient Problem Solver 💪</li>
          <li>Proactive Communicator 📢</li>
          <li>Patient and Calm Under Pressure ⏳</li>
          <li>Collaborative Team Player 🤝</li>
          <li>Empathetic Listener 🎧</li>
        </ul>
      </div>
    </section>
  );
};

export default About;
