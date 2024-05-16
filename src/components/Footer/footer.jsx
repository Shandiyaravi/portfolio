import React from 'react';
import email from '../../assets/gmail.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import resume from '../../assets/resume.png';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <section id='Contact' className={styles.wrapper}>
      <footer className={styles.container}>
        <ul className={styles.links}>
          <li className={styles.link}>
            <a href='mailto:shandiyaravi@gmail.com'>
              <img src={email} alt='Email icon' />
            </a>
          </li>
          <li className={styles.link}>
            <a href='https://www.linkedin.com/in/shandiya-ravichandran-988b03bb/'>
              <img src={linkedin} alt='LinkedIn icon' />
            </a>
          </li>
          <li className={styles.link}>
            <a href='https://github.com/Shandiyaravi'>
              <img src={github} alt='Github icon' />
            </a>
          </li>
          <li className={styles.link}>
            <a href='https://drive.google.com/file/d/1y8ZS56JT1dlZcbYnA7MqXqE6l1kvCGrH/view?usp=sharing'>
              <img src={resume} alt='resume icon' />
            </a>
          </li>
        </ul>
      </footer>
      <div className={styles.subcontainer}>
        <p>Designed and created by Shandiya Ravichandran !</p>
      </div>
    </section>
  );
};

export default Footer;
