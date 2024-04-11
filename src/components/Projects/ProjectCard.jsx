import React from 'react';
import styles from './Projects.module.css';

const ProjectCard = ({ title, imageSrc, description }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <div className={styles.imageContainer}>
          <img
            className={styles.image}
            src={imageSrc}
            alt={`Image of ${title}`}
          />
        </div>
        <div className={styles.descriptionContainer}>
          <h5 className={styles.title}>{title}</h5>
          <p className={styles.description}>{description}</p>

          <div className={`${styles.cardBack} ${styles.face}`}>
            <a href='#'>GitHub</a>
            <a href='#'>Live</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
