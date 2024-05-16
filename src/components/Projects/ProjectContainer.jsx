import React from 'react';

import styles from './ProjectContainer.module.css';

export const ProjectContainer = ({
  project: { title, imageSrc, description, skills, Github, Live },
}) => {
  return (
    <div className={styles.container}>
      <img src={imageSrc} alt={`Image of ${title}`} className={styles.image} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {title !== 'Mentatt' ? (
            <a href={Github} className={styles.githubLink}>
              GitHub
            </a>
          ) : (
            <button className={styles.disabledButton} disabled>
              GitHub
            </button>
          )}
          <a href={Live} className={styles.githubLink}>
            Live
          </a>
        </div>
      </div>
    </div>
  );
};
