import styles from './Skills.module.css';
import data from '../../data/data.json';

import React from 'react';

const Skills = () => {
  return (
    <section className={styles.wrapper} id='Skills'>
      <h2 className={styles.heading}>Skills</h2>
      <div className={styles.container}>
        <div className={styles.skills}>
          {data.map((data, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={data.imageSrc} alt={data.title} />
                </div>
                <p>{data.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
