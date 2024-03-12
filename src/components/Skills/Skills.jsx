import styles from './Skills.module.css';
import Technologies from '../../data/data.js';

import React from 'react';

const Skills = () => {
  return (
    <section className={styles.wrapper} id='Skills'>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.container}>
        <div className={styles.skills}>
          {Technologies.map((Technology, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={Technology.imageSrc} alt={Technology.title} />
                </div>
                <p>{Technology.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
